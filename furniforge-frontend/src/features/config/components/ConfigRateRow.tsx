import {
  Pencil,
  ToggleLeft,
  ToggleRight,
  Trash2,
} from "lucide-react";

import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";

interface Props {
  rate: ConfigRateResponseDTO;
  onEdit: () => void;
  onToggle?: () => void;
  onDelete?: () => void;
}

export function ConfigRateRow({
  rate,
  onEdit,
  onToggle,
  onDelete,
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
        {rate.unit}
      </div>

      {/* Final */}

      <div className="w-20 shrink-0 text-right text-sm font-bold text-accent">
        ₹{Number(rate.finalRate).toFixed(2)}
      </div>

      {/* Actions */}

      <div className="w-20 shrink-0 flex justify-end gap-1">
        <button
          type="button"
          onClick={onToggle}
          className="rounded-lg p-1.5 hover:bg-muted"
        >
          {rate.isActive ? (
            <ToggleRight
              size={14}
              className="text-accent"
            />
          ) : (
            <ToggleLeft size={14} />
          )}
        </button>

        <button
          type="button"
          onClick={onEdit}
          className="rounded-lg p-1.5 hover:bg-muted hover:text-accent"
        >
          <Pencil size={12} />
        </button>

        <button
          type="button"
          onClick={onDelete}
          className="rounded-lg p-1.5 hover:bg-muted hover:text-destructive"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  );
}