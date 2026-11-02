import { X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  INCIDENT_STATUSES,
  SOS_STATUSES,
  formatDateTime,
  labelize,
  type IncidentStatus,
  type SosStatus,
} from "@/lib/phoenix/constants";

/** The happy path each lifecycle walks; terminal off-ramps are handled separately. */
export const INCIDENT_PATH: IncidentStatus[] = INCIDENT_STATUSES.filter((s) => s !== "REJECTED");
export const SOS_PATH: SosStatus[] = SOS_STATUSES.filter((s) => s !== "CANCELLED");

function position(path: readonly string[], status: string) {
  const index = path.indexOf(status);
  return { index, stopped: index === -1 };
}

/**
 * Compact segmented bar for ledgers. Done segments are ink, the current one is
 * signal yellow, the rest are rule grey. A stopped case (rejected / cancelled)
 * keeps the segments it reached and greys the rest.
 */
export function StepBar({
  path,
  status,
  reached,
  className,
}: {
  path: readonly string[];
  status: string;
  /** For stopped cases: how far the case got before it stopped. */
  reached?: number;
  className?: string;
}) {
  const { index, stopped } = position(path, status);
  const done = stopped ? (reached ?? 1) : index;
  const finished = !stopped && index === path.length - 1;
  return (
    <span
      className={cn("inline-flex items-center gap-[3px]", className)}
      role="img"
      aria-label={
        stopped
          ? `${labelize(status)}`
          : `Step ${index + 1} of ${path.length}: ${labelize(status)}`
      }
    >
      {path.map((step, i) => (
        <span
          key={step}
          className={cn(
            "block h-1.5 w-5",
            i < done || finished
              ? "bg-ink"
              : i === done && !stopped
                ? "bg-signal outline outline-1 outline-ink"
                : "bg-border",
          )}
        />
      ))}
    </span>
  );
}

/**
 * The full numbered rail used on detail views. Each step shows when it
 * happened, if it has; the current step is marked with the signal colour.
 */
export function StepRail({
  path,
  status,
  history,
  stoppedLabel,
}: {
  path: readonly string[];
  status: string;
  history: { status: string; created_at: string; note?: string | null }[];
  stoppedLabel?: string | undefined;
}) {
  const { index, stopped } = position(path, status);
  const seen = new Map<string, { created_at: string; note?: string | null }>();
  for (const entry of history) if (!seen.has(entry.status)) seen.set(entry.status, entry);
  const reachedIndex = stopped
    ? Math.max(-1, ...path.map((s, i) => (seen.has(s) ? i : -1)))
    : index;

  return (
    <ol className="relative">
      {path.map((step, i) => {
        const entry = seen.get(step);
        const atEnd = !stopped && index === path.length - 1;
        const isCurrent = !stopped && i === index && !atEnd;
        const isDone = stopped ? i <= reachedIndex : i < index || atEnd;
        const last = i === path.length - 1 && !stopped;
        return (
          <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
            {!last ? (
              <span
                aria-hidden
                className={cn(
                  "absolute left-[15px] top-8 bottom-0 w-[2px]",
                  i < reachedIndex ? "bg-ink" : "bg-border",
                )}
              />
            ) : null}
            <span
              className={cn(
                "relative z-10 grid h-8 w-8 shrink-0 place-items-center border-2 text-sm font-bold tabular-nums",
                isCurrent
                  ? "border-ink bg-signal text-ink"
                  : isDone
                    ? "border-ink bg-ink text-paper"
                    : "border-border bg-paper text-muted-foreground",
              )}
            >
              {i + 1}
            </span>
            <div className="min-w-0 pt-1">
              <p className={cn("font-semibold", !isDone && !isCurrent && "text-muted-foreground")}>
                {labelize(step)}
                {isCurrent ? <span className="sr-only"> (current step)</span> : null}
              </p>
              {entry ? (
                <p className="text-sm text-muted-foreground">
                  <time dateTime={entry.created_at}>{formatDateTime(entry.created_at)}</time>
                  {entry.note ? ` · ${entry.note}` : ""}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
      {stopped ? (
        <li className="relative flex gap-4 border-t border-border pt-5">
          <span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-emergency bg-tag-red text-sm font-bold text-tag-red-ink">
            <X size={16} weight="bold" />
          </span>
          <div className="pt-1">
            <p className="font-semibold">{stoppedLabel ?? labelize(status)}</p>
            {seen.get(status) ? (
              <p className="text-sm text-muted-foreground">
                {formatDateTime(seen.get(status)!.created_at)}
                {seen.get(status)!.note ? ` · ${seen.get(status)!.note}` : ""}
              </p>
            ) : null}
          </div>
        </li>
      ) : null}
    </ol>
  );
}
