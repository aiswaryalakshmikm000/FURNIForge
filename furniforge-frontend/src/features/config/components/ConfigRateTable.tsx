import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";
import type { ConfigCategory } from "../../../types/enums/config-type.enum";
import type { ConfigRateFormValues } from "../validation/config-rate-form.validation";
import { ConfigRateInlineForm } from "./ConfigRateInlineForm";

interface Props {
  category: ConfigCategory;
  rates: ConfigRateResponseDTO[];
  onCreate: (
    category: ConfigCategory,
    values: ConfigRateFormValues,
  ) => Promise<void>;
  addMode: boolean;
  setAddMode: (value: boolean) => void;
  isCreating: boolean;
}

const headerCls = "text-[10px] text-muted-foreground font-sans uppercase tracking-wider";

export function ConfigRateTable({
  category,
  rates,
  onCreate,
  addMode,
  setAddMode,
  isCreating,
}: Props) {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className={`flex-1 ${headerCls}`}>Item</span>
        <span className={`w-24 ${headerCls}`}>Brand</span>
        <span className={`w-20 text-right ${headerCls}`}>Rate</span>
        <span className={`w-16 text-right ${headerCls}`}>Margin</span>
        <span className={`w-24 ${headerCls}`}>Unit</span>
        <span className={`w-20 text-right ${headerCls}`}>Final</span>
        <span className="w-20" />
      </div>

      {rates.map((rate) => (
        <div
          key={rate.id}
          className={`flex items-center gap-2 py-2 ${!rate.isActive ? "opacity-50" : ""}`} >
          <div className="flex-1">
            <p className="text-sm font-medium ">
              {rate.itemName}
            </p>
          </div>

          <span className="w-24 text-sm text-muted-foreground">
            {rate.brand}
          </span>

          <span className="w-20 text-right text-sm">₹{rate.rate}</span>

          <span className="w-16 text-right text-sm text-muted-foreground">
            {rate.marginPercent}%
          </span>

          <span className="w-24 text-xs text-muted-foreground">
            {rate.unit}
          </span>

          <span className="w-20 text-right text-sm font-bold text-accent">
            ₹{rate.finalRate}
          </span>

          <div className="w-20" />
        </div>
      ))}

      {/* Inline Add */}

      {addMode && (
        <div className="flex items-center gap-2 pt-3 border-t border-border ">
          <ConfigRateInlineForm
            isLoading={isCreating}
            onSubmit={async (values) => {
              await onCreate(category, values);
              setAddMode(false);
            }}
            onCancel={() => setAddMode(false)}
          />
        </div>
      )}

      {rates.length === 0 && !addMode && (
        <div className="h-32 flex items-center justify-center text-sm text-muted-foreground ">
          No configuration rates available.
        </div>
      )}
    </div>
  );
}
