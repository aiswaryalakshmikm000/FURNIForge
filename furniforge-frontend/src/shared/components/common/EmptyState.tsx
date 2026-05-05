import type{ ReactNode } from "react";
import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export const EmptyState = ({
  title = "No results found",
  description = "We couldn't find any items matching your criteria.",
  icon,
  action,
  className = "",
}: EmptyStateProps) => {
  return (
    <div className={`flex flex-col items-center justify-center py-20 text-center ${className}`}>
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
        {icon || <FolderOpen size={32} className="text-muted-foreground" />}
      </div>

      <h3 className="text-xl font-semibold font-display mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};