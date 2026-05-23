import type { ReactNode } from "react";

interface Props {
  label?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export const FormField = ({ label, error, required, children }: Props) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-foreground font-sans">
          {label}

          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      {children}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
