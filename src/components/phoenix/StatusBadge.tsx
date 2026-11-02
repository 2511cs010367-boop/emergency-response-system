import { cn } from "@/lib/utils";
import { labelize } from "@/lib/phoenix/constants";

type Tone = "emergency" | "warning" | "info" | "success" | "muted";

const TONE_CLASS: Record<Tone, string> = {
  emergency: "bg-tag-red text-tag-red-ink",
  warning: "bg-tag-yellow text-tag-yellow-ink",
  info: "bg-tag-blue text-tag-blue-ink",
  success: "bg-tag-green text-tag-green-ink",
  muted: "bg-tag-grey text-tag-grey-ink",
};

/** Square status tag. The label always carries the meaning; colour only reinforces it. */
export function StatusBadge({
  status,
  tone,
  className,
}: {
  status: string;
  tone: Tone;
  className?: string;
}) {
  return (
    <strong
      className={cn(
        "inline-block whitespace-nowrap px-2 py-0.5 text-[13px] font-bold uppercase leading-5 tracking-[0.04em]",
        TONE_CLASS[tone],
        className,
      )}
    >
      {labelize(status)}
    </strong>
  );
}
