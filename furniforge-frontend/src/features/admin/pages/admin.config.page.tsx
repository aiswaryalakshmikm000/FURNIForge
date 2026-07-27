import { useState } from "react";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { PremiumLoader } from "../../../shared/components/common/loader";
import { Button } from "../../../shared/components/ui/button";
import { useDebounce } from "../../../shared/hooks/use-debounce";
import { ConfigCategory } from "../../../types/enums/config-type.enum";
import { ConfigCategorySection } from "../../config/components/ConfigCategorySection";
import { useGetAllConfigRates } from "../../config/hooks/use-get-config-rates";
import { useCreateConfigRate } from "../../config/hooks/use-create-config-rate";
import { useUpdateConfigRate } from "../../config/hooks/use-update-config-rate";
import { useToggleConfigRateStatus } from "../../config/hooks/use-toggle-config-rate-status";
import type { ConfigRateResponseDTO } from "../../config/types/get-all-config-rates.type";
import type { ConfigRateFormValues } from "../../config/validation/config-rate-form.validation";
import { useSoftDeleteConfigRate } from "../../config/hooks/use-soft-delete-config-rates";

export default function AdminConfigRatesPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [addCategory, setAddCategory] = useState<ConfigCategory | null>(null);
  const [editingConfigRate, setEditingConfigRate] = useState<ConfigRateResponseDTO | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } = useGetAllConfigRates({ search: debouncedSearch || undefined });
  const { mutateAsync: createConfigRate, isPending: isCreating } = useCreateConfigRate();
  const { mutateAsync: updateConfigRate, isPending: isUpdating } = useUpdateConfigRate();
  const { mutateAsync: toggleStatus } = useToggleConfigRateStatus();
  const { mutateAsync: deleteConfigRate } = useSoftDeleteConfigRate();

  const handleCreate = async (
    category: ConfigCategory,
    values: ConfigRateFormValues,
  ) => {
    await createConfigRate({
      category,
      ...values,
    });
    setAddCategory(null);
  };

  const handleUpdate = async ( id: string, values: ConfigRateFormValues ) => {
    await updateConfigRate({configRateId: id, payload: values });
    setEditingConfigRate(null);
  };

  const handleToggle = async (id: string) => {
    try{
      setTogglingId(id);
      await toggleStatus(id);
    } finally {
      setTogglingId(null);
    }
  };

  const handleDelete = async (id: string) => {
  try {
    setDeletingId(id);
    await deleteConfigRate({ configRateId: id });
  } finally {
    setDeletingId(null);
  }
};

  if (isLoading) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="Configuration"
          description="Manage unit rates — add, edit or remove items with brands"
        />

        <div className="flex justify-center py-20">
          <PremiumLoader />
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState
        title="Failed to load configuration rates"
        description="Something went wrong while loading configuration rates."
        action={
          <Button onClick={() => refetch()}>
            Retry
          </Button>
        }
      />
    );
  }

  return (
    <div className="space-y-6 w-full">
      <PageHeader
        title="Configuration"
        description="Manage unit rates — add, edit or remove items with brands"
      />

      <FilterSortDropdown
        search={search}
        searchPlaceholder="Search item name or brand..."
        onSearchChange={setSearch}
      />

      <div className="space-y-8 w-full">
        <ConfigCategorySection
          title="Shutter Finish Rates"
          category={ConfigCategory.FINISH}
          rates={data.data.shutterFinishRates}
          addMode={addCategory === ConfigCategory.FINISH}
          setAddMode={(value) =>
            setAddCategory(
              value ? ConfigCategory.FINISH : null
            )
          }
          editingConfigRate={editingConfigRate}
          setEditingConfigRate={setEditingConfigRate}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onToggle={handleToggle}
          togglingId={togglingId}
          onDelete={handleDelete}
          deletingId={deletingId}
          isCreating={isCreating}
          isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Cabinet Material Rates"
          category={ConfigCategory.MATERIAL}
          rates={data.data.cabinetMaterialRates}
          addMode={addCategory === ConfigCategory.MATERIAL}
          setAddMode={(value) =>
            setAddCategory(
              value ? ConfigCategory.MATERIAL : null
            )
          }
          editingConfigRate={editingConfigRate}
          setEditingConfigRate={setEditingConfigRate}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onToggle={handleToggle}
          togglingId={togglingId}
          onDelete={handleDelete}
          deletingId={deletingId}
          isCreating={isCreating}
          isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Handle Rates"
          category={ConfigCategory.HANDLE}
          rates={data.data.handleRates}
          addMode={addCategory === ConfigCategory.HANDLE}
          setAddMode={(value) =>
            setAddCategory(
              value ? ConfigCategory.HANDLE : null
            )
          }
          editingConfigRate={editingConfigRate}
          setEditingConfigRate={setEditingConfigRate}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onToggle={handleToggle}
          togglingId={togglingId}
          onDelete={handleDelete}
          deletingId={deletingId}
          isCreating={isCreating}
          isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Hinge Rates"
          category={ConfigCategory.HINGE}
          rates={data.data.hingeRates}
          addMode={addCategory === ConfigCategory.HINGE}
          setAddMode={(value) =>
            setAddCategory(
              value ? ConfigCategory.HINGE : null
            )
          }
          editingConfigRate={editingConfigRate}
          setEditingConfigRate={setEditingConfigRate}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onToggle={handleToggle}
          togglingId={togglingId}
          onDelete={handleDelete}
          deletingId={deletingId}
          isCreating={isCreating}
          isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Accessory Rates"
          category={ConfigCategory.ACCESSORY}
          rates={data.data.accessoryRates}
          addMode={addCategory === ConfigCategory.ACCESSORY}
          setAddMode={(value) =>
            setAddCategory(
              value ? ConfigCategory.ACCESSORY : null
            )
          }
          editingConfigRate={editingConfigRate}
          setEditingConfigRate={setEditingConfigRate}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onToggle={handleToggle}
          togglingId={togglingId}
          onDelete={handleDelete}
          deletingId={deletingId}
          isCreating={isCreating}
          isUpdating={isUpdating}
        />
      </div>
    </div>
  );
}