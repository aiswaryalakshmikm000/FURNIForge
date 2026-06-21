import { Pencil, Trash2 } from "lucide-react";

import type { RequirementFieldResponseDTO } from "../types/field.type";

interface Props {
  field: RequirementFieldResponseDTO;
}

export function RequirementFieldRow({ field }: Props) {

  return (
    <div className="flex items-center  text-[12px] gap-4 py-3 px-6 border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
      <div className="flex-1">
        <p className="font-medium">{field.label}</p>
      </div>

      <span className="px-2 py-1 rounded-full bg-muted text-[10px] text-muted-foreground font-sans">
        {field.fieldType}
      </span>

      {(field.options ?? []).length > 0 && (
        <span className="text-[12px] text-muted-foreground font-sans max-w-[220px] truncate">
          {field.options?.join(", ")}
        </span>
      )}

      {field.defaultValue && (
        <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs">
          Default: {field.defaultValue}
        </span>
      )}

      <span
        className={
          field.isRequired
            ? "text-accent text-xs font-sans whitespace-nowrap"
            : "text-muted-foreground text-xs whitespace-nowrap"
        }
      >
        {field.isRequired ? "Required" : "Optional"}
      </span>

      <button
        type="button"
        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-accent"
      >
        <Pencil size={14} />
      </button>

      <button
        type="button"
        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-destructive"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}