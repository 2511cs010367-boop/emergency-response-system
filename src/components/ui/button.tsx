import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] text-[15px] font-semibold cursor-pointer transition-colors duration-150 disabled:pointer-events-none disabled:opacity-45 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-[#2c2f35] active:bg-black",
        destructive: "bg-emergency text-emergency-foreground hover:bg-emergency-deep",
        emergency: "bg-emergency text-emergency-foreground hover:bg-emergency-deep",
        outline: "border border-ink bg-paper text-ink hover:bg-surface",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[#e0ddd8]",
        ghost: "text-ink hover:bg-surface",
        link: "h-auto px-0 text-link underline hover:text-ink hover:decoration-2",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        suppressHydrationWarning
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
