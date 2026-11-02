import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

/** Plain, left-aligned empty state. The icon sits bare, in ink, never on a tile. */
export function EmptyState({
  icon: IconComponent,
  title,
  description,
  action,
}: {
  icon: Icon;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="border-t border-border py-10">
      <IconComponent size={32} className="text-muted-foreground" aria-hidden />
      <h3 className="mt-3 text-lg font-bold">{title}</h3>
      <p className="mt-1 max-w-[52ch] text-muted-foreground">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
