import { cn } from "@/lib/utils";

interface PhoenixLogoProps {
  className?: string;
  showWordmark?: boolean;
  subtitle?: boolean;
}

/** A square frame with a rising chevron: help coming up to meet you. */
export function PhoenixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label="PHOENIX"
      className={cn("h-7 w-7 shrink-0", className)}
    >
      <rect x="1.5" y="1.5" width="29" height="29" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M8 20.5 16 12.5l8 8" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="miter" />
      <path d="M11 25h10" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function PhoenixLogo({ className, showWordmark = true, subtitle = false }: PhoenixLogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <PhoenixMark />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="text-[17px] font-extrabold tracking-[0.16em]">PHOENIX</span>
          {subtitle ? (
            <span className="mt-1.5 text-[13px] font-medium tracking-normal opacity-75">
              Smart Public Safety &amp; Emergency Response
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
