import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { ConfigRateTable } from "./ConfigRateTable";
import type { ConfigCategory } from "../../../types/enums/config-type.enum";
import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";
import type { ConfigRateFormValues } from "../validation/config-rate-form.validation";

interface Props {
  title: string;
  category: ConfigCategory;
  rates: ConfigRateResponseDTO[];
  addMode: boolean;
  setAddMode: (value: boolean) => void;
  editingConfigRate: ConfigRateResponseDTO | null;
  setEditingConfigRate: ( value: ConfigRateResponseDTO | null ) => void;
  onCreate: ( category: ConfigCategory, values: ConfigRateFormValues ) => Promise<void>;
  onUpdate: ( id: string, values: ConfigRateFormValues ) => Promise<void>;
  onToggle: (id: string) => Promise<void>;
  togglingId: string | null;
  onDelete: (id: string) => Promise<void>;
  deletingId: string | null;
  isCreating: boolean;
  isUpdating: boolean;
}

export function ConfigCategorySection({
  title,
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
    <section className="w-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-warm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">
          {title}
        </h2>

        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1 text-xs shrink-0"
          onClick={() => {
            setEditingConfigRate(null);
            setAddMode(true);
          }}
          disabled={addMode}
        >
          <Plus size={12} />
          Add
        </Button>
      </div>

      <ConfigRateTable
        category={category}
        rates={rates}
        addMode={addMode}
        setAddMode={setAddMode}
        editingConfigRate={editingConfigRate}
        setEditingConfigRate={setEditingConfigRate}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onToggle={onToggle}
        togglingId={togglingId}
        onDelete={onDelete}
        deletingId={deletingId}
        isCreating={isCreating}
        isUpdating={isUpdating}
      />
    </section>
  );
}