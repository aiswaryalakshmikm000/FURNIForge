import { ToggleLeft, ToggleRight } from "lucide-react";

interface Props {
  isActive: boolean;
  onClick?: () => void;
}

export function StatusToggle({ isActive, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 hover:opacity-80 transition-opacity"
    >
      {isActive ? (
        <>
          <ToggleRight size={22} className="text-accent" />
          <span className="text-xs font-medium text-accent">Active</span>
        </>
      ) : (
        <>
          <ToggleLeft size={22} className="text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">
            Inactive
          </span>
        </>
      )}
    </button>
  );
}
