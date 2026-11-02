"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { INCIDENT_PATH, StepBar } from "@/components/phoenix/StepRail";
import {
  INCIDENT_STATUS_TONE,
  labelize,
  timeAgo,
  type Incident,
} from "@/lib/phoenix/constants";

/**
 * The fixed-column ledger for incidents. Rows are ranked by time and columns
 * never move; the whole row opens the report.
 */
export function IncidentLedger({
  incidents,
  showProgress = true,
  extraColumn,
}: {
  incidents: Incident[];
  showProgress?: boolean;
  extraColumn?: {
    header: string;
    render: (incident: Incident) => React.ReactNode;
    /** Keep the column on small screens (e.g. an admin control). */
    alwaysVisible?: boolean;
  };
}) {
  const extraCell = extraColumn?.alwaysVisible ? "" : "hidden md:table-cell";
  const router = useRouter();
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-ink text-sm">
            <th scope="col" className="py-2.5 pr-4 font-bold">Reference</th>
            <th scope="col" className="py-2.5 pr-4 font-bold">What happened</th>
            <th scope="col" className="py-2.5 pr-4 font-bold">Status</th>
            {showProgress ? (
              <th scope="col" className="hidden py-2.5 pr-4 font-bold md:table-cell">Progress</th>
            ) : null}
            {extraColumn ? (
              <th scope="col" className={`py-2.5 pr-4 font-bold ${extraCell}`}>
                {extraColumn.header}
              </th>
            ) : null}
            <th scope="col" className="hidden py-2.5 text-right font-bold sm:table-cell">Updated</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr
              key={incident.id}
              onClick={() => router.push(`/incidents/${incident.id}`)}
              className="cursor-pointer border-b border-border align-top transition-colors hover:bg-surface"
            >
              <td className="whitespace-nowrap py-4 pr-4 text-[15px] font-semibold tabular-nums">
                <Link
                  href={`/incidents/${incident.id}`}
                  className="underline-offset-4 hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  {incident.reference}
                </Link>
              </td>
              <td className="py-4 pr-4">
                <span className="block font-medium">{incident.title}</span>
                <span className="block text-sm text-muted-foreground">
                  {labelize(incident.category)}
                  <span className="sm:hidden"> · {timeAgo(incident.updated_at)}</span>
                </span>
              </td>
              <td className="py-4 pr-4">
                <StatusBadge status={incident.status} tone={INCIDENT_STATUS_TONE[incident.status]} />
              </td>
              {showProgress ? (
                <td className="hidden py-5 pr-4 md:table-cell">
                  <StepBar path={INCIDENT_PATH} status={incident.status} />
                </td>
              ) : null}
              {extraColumn ? (
                <td className={`py-4 pr-4 text-[15px] ${extraCell}`}>
                  {extraColumn.render(incident)}
                </td>
              ) : null}
              <td className="hidden whitespace-nowrap py-4 text-right text-[15px] text-muted-foreground tabular-nums sm:table-cell">
                <time dateTime={incident.updated_at}>{timeAgo(incident.updated_at)}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
