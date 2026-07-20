import type { ConfigCategory } from "../../../types/enums/config-type.enum";
import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";
import type { ConfigRateFormValues } from "../validation/config-rate-form.validation";
import { ConfigRateInlineForm } from "./ConfigRateInlineForm";
import { ConfigRateRow } from "./ConfigRateRow";

interface Props {
  category: ConfigCategory;
  rates: ConfigRateResponseDTO[];
  addMode: boolean;
  setAddMode: (value: boolean) => void;
  editingConfigRate: ConfigRateResponseDTO | null;
  setEditingConfigRate: ( value: ConfigRateResponseDTO | null ) => void;
  onCreate: ( category: ConfigCategory, values: ConfigRateFormValues ) => Promise<void>;
  onUpdate: ( id: string, values: ConfigRateFormValues ) => Promise<void>;
  onToggle:(id:string)=>Promise<void>;
  togglingId : string | null;
  onDelete:(id:string)=>Promise<void>;
  deletingId: string | null;
  isCreating: boolean;
  isUpdating: boolean;
}

const headerCls = "text-[10px] uppercase tracking-wider text-muted-foreground font-sans";

export function ConfigRateTable({
  category,
  rates,
  addMode,
  setAddMode,
  editingConfigRate,
  setEditingConfigRate,
  onCreate,
  onUpdate,
  onToggle,
  togglingId,
  onDelete,
  deletingId,
  isCreating,
  isUpdating,
}: Props) {
  return (
    <div className="w-full min-w-0 space-y-2">

      <div className="flex min-w-0 items-center gap-2 border-b border-border pb-2">
        <span className={`flex-1 min-w-0 ${headerCls}`}> Item </span>
        <span className={`w-24 shrink-0 ${headerCls}`}> Brand </span>
        <span className={`w-20 shrink-0 text-right ${headerCls}`}> Rate </span>
        <span className={`w-16 shrink-0 text-right ${headerCls}`}> Margin </span>
        <span className={`w-24 shrink-0 ${headerCls}`}> Unit </span>
        <span className={`w-20 shrink-0 text-right ${headerCls}`}> Final </span>
        <span className={`w-32 shrink-0 text-right ${headerCls}`}> Actions </span>
      </div>

      {/* Rows */}

      {rates.map((rate) => {
        const isEditing = editingConfigRate?.id === rate.id;

        if (isEditing) {
          return (
            <ConfigRateInlineForm
              key={rate.id}
              defaultValues={{
                itemName: rate.itemName,
                brand: rate.brand,
                rate: Number(rate.rate),
                marginPercent: Number(rate.marginPercent),
                unit: rate.unit,
              }}
              isLoading={isUpdating}
              onSubmit={async (values) => { await onUpdate(rate.id, values) }}
              onCancel={() => setEditingConfigRate(null) }
            />
          );
        }

        return (
          <ConfigRateRow
            key={rate.id}
            rate={rate}
            onEdit={() => {
              setAddMode(false);
              setEditingConfigRate(rate);
            }}
            onToggle={() => onToggle(rate.id)}
            onDelete={() => onDelete(rate.id)}
            isToggling={togglingId === rate.id}
            isDeleting={deletingId === rate.id}
          />
        );
      })}

      {/* Add */}

      {addMode && (
        <div className="border-t border-border pt-3">
          <ConfigRateInlineForm
            isLoading={isCreating}
            onSubmit={async (values) => { await onCreate(category, values) }}
            onCancel={() => setAddMode(false)}
          />
        </div>
      )}

      {/* Empty */}

      {rates.length === 0 && !addMode && (
        <div className="flex h-28 items-center justify-center text-sm text-muted-foreground">
          No configuration rates available.
        </div>
      )}
    </div>
  );
}