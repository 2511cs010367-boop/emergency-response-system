import { cn } from "@/lib/utils";

export interface Figure {
  label: string;
  value: number | string;
  /** Marks a figure that needs attention (e.g. active SOS > 0). */
  alert?: boolean;
}

/**
 * A ruled row of plain figures: label above, number below, no icons, no boxes.
 * Columns are separated by hairlines so the row reads like a ledger header.
 */
export function Figures({ items, className }: { items: Figure[]; className?: string }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-y border-ink sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        className,
      )}
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "border-border px-0 py-4 sm:px-5 sm:first:pl-0",
            i % 2 === 1 && "pl-4",
            "sm:border-l sm:first:border-l-0",
            i >= 2 && "border-t sm:border-t-0",
          )}
        >
          <dt className="text-sm text-muted-foreground">{item.label}</dt>
          <dd
            className={cn(
              "mt-1 text-[28px] font-bold leading-none tabular-nums",
              item.alert && "text-emergency",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
