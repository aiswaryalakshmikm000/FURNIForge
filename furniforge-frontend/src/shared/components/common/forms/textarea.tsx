import * as React from "react";
import { cn } from "../../../utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[120px] px-4 py-3 rounded-xl border border-border bg-background text-sm",
        "focus:ring-2 focus:ring-accent outline-none",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";