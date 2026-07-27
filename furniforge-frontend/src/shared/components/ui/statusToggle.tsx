import { ToggleLeft, ToggleRight } from "lucide-react";

interface Props {
  isActive: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function StatusToggle({
  isActive,
  disabled = false,
  onClick,
}: Props) {

  const isDisabled = disabled || !onClick;

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={`
        flex items-center gap-1
        transition-opacity
        ${
          isDisabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:opacity-80"
        }
      `}
    >

      {isActive ? (
        <>
          <ToggleRight
            size={22}
            className={`
              pointer-events-none
              ${
                isDisabled
                  ? "text-muted-foreground"
                  : "text-accent"
              }
            `}
          />

          <span
            className={`
              pointer-events-none
              text-xs font-medium
              ${
                isDisabled
                  ? "text-muted-foreground"
                  : "text-accent"
              }
            `}
          >
            Active
          </span>
        </>
      ) : (
        <>
          <ToggleLeft
            size={22}
            className="
              pointer-events-none
              text-muted-foreground
            "
          />

          <span
            className="
              pointer-events-none
              text-xs font-medium
              text-muted-foreground
            "
          >
            Inactive
          </span>
        </>
      )}

    </button>
  );
}