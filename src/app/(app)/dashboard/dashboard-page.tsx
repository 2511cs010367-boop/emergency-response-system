"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin, Siren, WarningCircle } from "@phosphor-icons/react";
import { PageHeader, SectionHeading, TextLink } from "@/components/phoenix/AppShell";
import { Figures } from "@/components/phoenix/Figures";
import { IncidentLedger } from "@/components/phoenix/IncidentLedger";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/phoenix/auth";
import { userDashboard } from "@/lib/phoenix/api";
import { SOS_STATUS_TONE, labelize, timeAgo } from "@/lib/phoenix/constants";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardPage() {
  const { user, profile } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user?.id],
    queryFn: () => userDashboard(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 20000,
  });

  const active = data?.alerts.find((alert) =>
    ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(alert.status),
  );
  const firstName = (profile?.full_name ?? "there").split(" ")[0];
  const contacts = data?.contacts ?? [];

  const stateLine = isLoading
    ? "Checking your safety status…"
    : active
      ? `Your ${labelize(active.emergency_type).toLowerCase()} SOS is ${labelize(active.status).toLowerCase()}. It was raised ${timeAgo(active.created_at)}.`
      : contacts.length
        ? `No active emergency. If you raise an SOS, ${contacts.length} ${contacts.length === 1 ? "contact" : "contacts"} will be told where you are.`
        : "No active emergency. Add an emergency contact so someone is told when you raise an SOS.";

  return (
    <>
      <PageHeader title={`${greeting()}, ${firstName}`} description={stateLine} />

      <div className="grid gap-14 lg:grid-cols-[380px_1fr] lg:gap-16">
        <div className="space-y-12">
          <Link
            href="/sos"
            className="group flex min-h-[184px] flex-col justify-between bg-emergency p-6 text-emergency-foreground transition-colors hover:bg-emergency-deep"
          >
            <span className="flex items-center justify-between text-[15px] font-semibold">
              {active ? "SOS in progress" : "Opens the SOS screen"}
              <Siren size={28} weight="fill" aria-hidden />
            </span>
            <span className="flex items-end justify-between gap-4">
              <span className="text-[40px] font-extrabold leading-none tracking-[-0.02em]">
                {active ? "View status" : "Raise SOS"}
              </span>
              <ArrowRight
                size={28}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </Link>

          <section aria-labelledby="contacts-heading">
            <SectionHeading
              id="contacts-heading"
              title="Emergency contacts"
              action={<TextLink href="/contacts">Manage</TextLink>}
            />
            {isLoading ? (
              <Skeleton className="mt-3 h-24" />
            ) : contacts.length ? (
              <ul>
                {contacts.slice(0, 4).map((contact) => (
                  <li
                    key={contact.id}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                  >
                    <span className="truncate font-medium">{contact.name}</span>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {contact.relationship} · {contact.priority === 1 ? "first call" : `priority ${contact.priority}`}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-4 text-muted-foreground">
                Nobody yet.{" "}
                <Link href="/contacts" className="font-semibold text-link underline underline-offset-4">
                  Add your first contact
                </Link>
                .
              </p>
            )}
          </section>

          <section aria-labelledby="more-heading">
            <SectionHeading id="more-heading" title="Other things you can do" />
            <ul>
              {[
                { href: "/incidents/new", label: "Report an incident", icon: WarningCircle },
                { href: "/map", label: "Find police, hospitals and fire stations", icon: MapPin },
              ].map((item) => (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 py-3.5 font-semibold hover:text-link"
                  >
                    <item.icon size={20} aria-hidden />
                    <span className="underline-offset-4 group-hover:underline">{item.label}</span>
                    <ArrowRight size={16} className="ml-auto text-muted-foreground" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="min-w-0 space-y-12">
          <section aria-labelledby="reports-heading">
            <SectionHeading
              id="reports-heading"
              title="Your reports"
              action={<TextLink href="/incidents">All reports</TextLink>}
            />
            {isLoading ? (
              <div className="space-y-2 pt-3">
                <Skeleton className="h-16" />
                <Skeleton className="h-40" />
              </div>
            ) : (
              <>
                <Figures
                  className="mt-4 mb-6 border-t-0"
                  items={[
                    { label: "Filed", value: data?.totalReports ?? 0 },
                    { label: "Still open", value: data?.pendingReports ?? 0 },
                    { label: "Resolved", value: data?.resolvedReports ?? 0 },
                  ]}
                />
                {data?.incidents.length ? (
                  <IncidentLedger incidents={data.incidents.slice(0, 6)} />
                ) : (
                  <EmptyState
                    icon={WarningCircle}
                    title="No reports yet"
                    description="When you witness an accident, crime or hazard, file a report here and follow it until it is resolved."
                    action={
                      <Button asChild>
                        <Link href="/incidents/new">Report an incident</Link>
                      </Button>
                    }
                  />
                )}
              </>
            )}
          </section>

          <section aria-labelledby="sos-heading">
            <SectionHeading
              id="sos-heading"
              title="SOS history"
              action={<TextLink href="/sos">SOS screen</TextLink>}
            />
            {data?.alerts.length ? (
              <ul>
                {data.alerts.slice(0, 4).map((alert) => (
                  <li
                    key={alert.id}
                    className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-border py-3.5 sm:grid-cols-[1fr_auto_120px]"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium">{labelize(alert.emergency_type)}</span>
                      {alert.address ? (
                        <span className="block truncate text-sm text-muted-foreground">{alert.address}</span>
                      ) : null}
                    </span>
                    <StatusBadge status={alert.status} tone={SOS_STATUS_TONE[alert.status]} />
                    <time
                      dateTime={alert.created_at}
                      className="hidden text-right text-[15px] text-muted-foreground tabular-nums sm:block"
                    >
                      {timeAgo(alert.created_at)}
                    </time>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-4 text-muted-foreground">You have never raised an SOS.</p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
