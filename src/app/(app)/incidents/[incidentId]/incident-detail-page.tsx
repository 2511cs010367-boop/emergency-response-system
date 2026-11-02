"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { FileX, Paperclip } from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { INCIDENT_PATH, StepRail } from "@/components/phoenix/StepRail";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getIncident, listIncidentMedia, signedUrl } from "@/lib/phoenix/api";
import { INCIDENT_STATUS_TONE, formatDateTime, labelize } from "@/lib/phoenix/constants";

export function IncidentDetailPage() {
  const { incidentId } = useParams<{ incidentId: string }>();

  const { data: incident, isLoading } = useQuery({
    queryKey: ["incident", incidentId],
    queryFn: () => getIncident(incidentId),
  });

  const { data: media = [] } = useQuery({
    queryKey: ["incident-media", incidentId],
    queryFn: async () => {
      const rows = await listIncidentMedia(incidentId);
      return Promise.all(
        rows.map(async (row) => ({
          ...row,
          url: await signedUrl("incident-media", row.storage_path),
        })),
      );
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-5 w-1/3" />
        <div className="grid gap-12 pt-8 lg:grid-cols-[1fr_340px]">
          <Skeleton className="h-72" />
          <Skeleton className="h-72" />
        </div>
      </div>
    );
  }

  if (!incident) {
    return (
      <>
        <PageHeader back={{ href: "/incidents", label: "All incidents" }} title="Report not found" />
        <EmptyState
          icon={FileX}
          title="This report could not be found"
          description="It may have been removed, or the link may be wrong."
          action={
            <Button asChild variant="outline">
              <Link href="/incidents">Back to incidents</Link>
            </Button>
          }
        />
      </>
    );
  }

  const facts: { term: string; value: React.ReactNode }[] = [
    { term: "Reference", value: <span className="tabular-nums">{incident.reference}</span> },
    { term: "Category", value: labelize(incident.category) },
    {
      term: "Occurred at",
      value: (
        <time dateTime={incident.occurred_at} className="tabular-nums">
          {formatDateTime(incident.occurred_at)}
        </time>
      ),
    },
    {
      term: "Location",
      value: incident.location ? (
        <>
          {incident.location}
          {incident.latitude != null && incident.longitude != null ? (
            <span className="block text-sm text-muted-foreground tabular-nums">
              {incident.latitude.toFixed(5)}, {incident.longitude.toFixed(5)}
            </span>
          ) : null}
        </>
      ) : incident.latitude != null && incident.longitude != null ? (
        <span className="tabular-nums">
          {incident.latitude.toFixed(5)}, {incident.longitude.toFixed(5)}
        </span>
      ) : (
        <span className="text-muted-foreground">Not given</span>
      ),
    },
    {
      term: "Filed",
      value: (
        <time dateTime={incident.created_at} className="tabular-nums">
          {formatDateTime(incident.created_at)}
        </time>
      ),
    },
    {
      term: "Last updated",
      value: (
        <time dateTime={incident.updated_at} className="tabular-nums">
          {formatDateTime(incident.updated_at)}
        </time>
      ),
    },
  ];

  // There is no status history table for incidents, so the only step we can
  // date honestly is the filing itself.
  const history = [{ status: "SUBMITTED", created_at: incident.created_at }];

  return (
    <>
      <PageHeader
        back={{ href: "/incidents", label: "All incidents" }}
        title={incident.title}
        description={`${incident.reference} · ${labelize(incident.category)}`}
        action={<StatusBadge status={incident.status} tone={INCIDENT_STATUS_TONE[incident.status]} />}
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
        <div className="min-w-0 space-y-12">
          <section aria-labelledby="report-heading">
            <SectionHeading id="report-heading" title="The report" />
            <dl>
              {facts.map((fact) => (
                <div
                  key={fact.term}
                  className="grid gap-1 border-b border-border py-3 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="text-[15px] font-semibold">{fact.term}</dt>
                  <dd className="min-w-0 break-words">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="description-heading">
            <SectionHeading id="description-heading" title="What happened" />
            <p className="max-w-[68ch] whitespace-pre-wrap pt-3 leading-relaxed">
              {incident.description}
            </p>
            {incident.additional_details ? (
              <>
                <h3 className="mt-6 font-bold">Additional details</h3>
                <p className="mt-1 max-w-[68ch] whitespace-pre-wrap leading-relaxed">
                  {incident.additional_details}
                </p>
              </>
            ) : null}
          </section>

          {incident.admin_notes ? (
            <section aria-labelledby="notes-heading" className="bg-surface p-5">
              <h2 id="notes-heading" className="font-bold">
                Notes from the response team
              </h2>
              <p className="mt-1 max-w-[68ch] whitespace-pre-wrap">{incident.admin_notes}</p>
            </section>
          ) : null}

          <section aria-labelledby="evidence-heading">
            <SectionHeading
              id="evidence-heading"
              title="Evidence"
              action={
                media.length ? (
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {media.length} {media.length === 1 ? "file" : "files"}
                  </span>
                ) : undefined
              }
            />
            {media.length ? (
              <ul className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3">
                {media.map((item, index) => (
                  <li key={item.id} className="min-w-0">
                    {item.mime_type.startsWith("image/") ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block aspect-square overflow-hidden border border-border bg-surface hover:border-ink"
                      >
                        <img
                          src={item.url}
                          alt={`Evidence ${index + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </a>
                    ) : item.mime_type.startsWith("video/") ? (
                      <video
                        src={item.url}
                        controls
                        preload="metadata"
                        aria-label={`Evidence ${index + 1}, video`}
                        className="aspect-square w-full border border-border bg-ink object-cover"
                      />
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex aspect-square flex-col items-start justify-end gap-2 border border-border p-3 text-[15px] font-semibold text-link underline underline-offset-4 hover:border-ink"
                      >
                        <Paperclip size={20} aria-hidden />
                        Open file {index + 1}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-4 text-muted-foreground">No photos or videos were attached.</p>
            )}
          </section>
        </div>

        <aside aria-labelledby="progress-heading" className="min-w-0">
          <SectionHeading id="progress-heading" title="Progress" />
          <p className="pb-6 pt-3 text-[15px] text-muted-foreground">
            Currently{" "}
            <span className="font-semibold text-ink">{labelize(incident.status).toLowerCase()}</span>
            . Last updated{" "}
            <time dateTime={incident.updated_at} className="tabular-nums">
              {formatDateTime(incident.updated_at)}
            </time>
            .
          </p>
          <StepRail
            path={INCIDENT_PATH}
            status={incident.status}
            history={history}
            {...(incident.status === "REJECTED" ? { stoppedLabel: "Rejected" } : {})}
          />
        </aside>
      </div>
    </>
  );
}
