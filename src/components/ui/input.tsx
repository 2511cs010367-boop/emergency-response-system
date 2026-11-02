import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-11 w-full rounded-[2px] border border-input bg-paper px-3 py-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-foreground placeholder:text-[#6b6f75] hover:border-ink disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-70 aria-[invalid=true]:border-emergency aria-[invalid=true]:border-2",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
