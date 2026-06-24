import { Pencil, Trash2 } from "lucide-react";
import type { RequirementFieldResponseDTO } from "../types/field.type";

interface Props {
  field: RequirementFieldResponseDTO;
  disabled?: boolean;
  onEdit: () => void;
  // onDelete: () => void;
}

export function RequirementFieldRow({ field, disabled = false, onEdit }: Props) {
  return (
    <div className="flex items-center text-[12px] gap-4 min-w-0 py-3 px-6 border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
      <div className="flex-1 min-w-[180px]">
        <p
          className={`font-medium ${
            disabled ? "text-muted-foreground/50" : ""
          }`}
        >
          {field.label}
        </p>
      </div>

      <span
        className={`px-2 py-1 rounded-full text-[10px] font-sans ${
          disabled
            ? "bg-muted text-muted-foreground/50"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {field.fieldType}
      </span>

      {(field.options ?? []).length > 0 && (
        <span
          className={`text-[12px] font-sans max-w-[250px] truncate shrink ${
            disabled ? "text-muted-foreground/50" : "text-muted-foreground"
          }`}
        >
          {field.options?.join(", ")}
        </span>
      )}

      {field.defaultValue && (
        <span
          className={`px-2 py-1 rounded-full text-xs shrink-0 ${
            disabled
              ? "bg-muted text-muted-foreground/50"
              : "bg-accent/10 text-accent"
          }`}
        >
          Default: {field.defaultValue}
        </span>
      )}

      <span
        className={
          disabled
            ? "text-muted-foreground/50 text-xs whitespace-nowrap"
            : field.isRequired
              ? "text-accent text-xs whitespace-nowrap"
              : "text-muted-foreground text-xs whitespace-nowrap"
        }
      >
        {field.isRequired ? "Required" : "Optional"}
      </span>

      <button
        disabled={disabled}
        onClick={onEdit}
        type="button"
        className={`p-1.5 rounded-lg ${
          disabled
            ? "text-muted-foreground/40 cursor-not-allowed"
            : "hover:bg-muted text-muted-foreground hover:text-accent"
        }`}
      >
        <Pencil size={14} />
      </button>

      <button
        disabled={disabled}
        type="button"
        // onClick={onDelete}
        className={`p-1.5 rounded-lg ${
          disabled
            ? "text-muted-foreground/40 cursor-not-allowed"
            : "hover:bg-muted text-destructive"
        }`}
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}
