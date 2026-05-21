import * as React from "react";
import { cn } from "../../../utils/cn";

export type SelectProps =
  React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "w-full mt-1.5 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none",
        "focus:ring-2 focus:ring-accent",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";