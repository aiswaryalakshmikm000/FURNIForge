import { Loader2Icon, Pencil, Trash2 } from "lucide-react";
import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";
import { getConfigUnitLabel } from "../../../shared/utils/config-unit-label";
import { StatusToggle } from "../../../shared/components/ui/statusToggle";
interface Props {
  rate: ConfigRateResponseDTO;
  onEdit: () => void;
  onToggle?: () => void;
  onDelete?: () => void;
  isToggling: boolean;
  isDeleting: boolean;
}

export function ConfigRateRow({
  rate,
  onEdit,
  onToggle,
  onDelete,
  isToggling,
  isDeleting,
}: Props) {
  return (
    <div
      className={`flex w-full min-w-0 items-center gap-2 py-1.5 ${
        !rate.isActive ? "opacity-50" : ""
      }`}
    >
      {/* Item */}

      <div className="flex-1 min-w-0 truncate font-medium text-sm">
        {rate.itemName}
      </div>

      {/* Brand */}

      <div className="w-24 shrink-0 truncate text-sm text-muted-foreground">
        {rate.brand}
      </div>

      {/* Rate */}

      <div className="w-20 shrink-0 text-right text-sm">
        ₹{Number(rate.rate).toFixed(2)}
      </div>

      {/* Margin */}

      <div className="w-16 shrink-0 text-right text-sm text-muted-foreground">
        {Number(rate.marginPercent)}%
      </div>

      {/* Unit */}

      <div className="w-24 shrink-0 truncate text-xs text-muted-foreground">
        {getConfigUnitLabel(rate.unit)}
      </div>

      {/* Final */}

      <div className="w-20 shrink-0 text-right text-sm font-bold text-accent">
        ₹{Math.round(Number(rate.finalRate)).toLocaleString("en-IN")}
      </div>

      {/* Actions */}

      <div className="w-32 shrink-0 flex items-center justify-end gap-1">
        <StatusToggle 
          isActive={rate.isActive} 
          disabled={ isToggling || !!rate.deletedAt} 
          onClick={onToggle}
        />

        <button
          type="button"
          onClick={onEdit}
          disabled={!rate.isActive || !!rate.deletedAt}
          className="rounded-lg p-1.5 hover:bg-muted hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Pencil size={12} className="pointer-events-none" />
        </button>

        <button
          type="button"
          onClick={onDelete}
          disabled={isDeleting || !rate.isActive || !!rate.deletedAt}
          className="rounded-lg p-1.5 hover:bg-muted hover:text-destructive disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isDeleting ? ( <Loader2Icon size={12} className="animate-spin" />
    ) : (
        <Trash2 size={12} className="pointer-events-none"/>
    )}
        </button>
      </div>
    </div>
  );
}