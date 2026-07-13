import { useState } from "react";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { Button } from "../../../shared/components/ui/button";
import { PremiumLoader } from "../../../shared/components/common/loader";
import { useDebounce } from "../../../shared/hooks/use-debounce";

import { useGetAllConfigRates } from "../../config/hooks/use-get-config-rates";
import { useCreateConfigRate } from "../../config/hooks/use-create-config-rate";
// import { useUpdateConfigRate } from "../../config/hooks/use-update-config-rate";   
// import { useToggleConfigRateStatus } from "../../config/hooks/use-toggle-config-rate-status"; 
// import { useDeleteConfigRate } from "../../config/hooks/use-delete-config-rate";     

import { ConfigCategorySection } from "../../config/components/ConfigCategorySection";
import type { ConfigRateFormValues } from "../../config/validation/config-rate-form.validation";
import { ConfigCategory } from "../../../types/enums/config-type.enum";

export default function AdminConfigRatesPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError, refetch } = useGetAllConfigRates({
    search: debouncedSearch || undefined,
  });

  const { mutateAsync: createConfigRate, isPending: isCreating } = useCreateConfigRate();
  // const { mutateAsync: updateConfigRate, isPending: isUpdating } = useUpdateConfigRate();
  // const { mutateAsync: toggleStatus } = useToggleConfigRateStatus();
  // const { mutateAsync: deleteConfigRate } = useDeleteConfigRate();

  const handleCreate = async (
    category: ConfigCategory,
    values: ConfigRateFormValues
  ) => {
    await createConfigRate({ ...values, category });
  };

  // const handleUpdate = async (id: string, values: ConfigRateFormValuesy) => {
  //   await updateConfigRate({ configRateId: id, payload: values });
  // };

  // const handleToggle = async (id: string) => {
  //   await toggleStatus(id);
  // };

  // const handleDelete = async (id: string) => {
  //   await deleteConfigRate(id);
  // };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <PageHeader title="Configuration" description="Manage unit rates — add new configuration items" />
        <div className="py-20 flex justify-center">
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
        action={<Button onClick={() => refetch()}>Retry</Button>}
      />
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Configuration"
        description="Manage unit rates — add, edit or remove items with brands"
      />

      <FilterSortDropdown
        search={search}
        searchPlaceholder="Search item name or brand..."
        onSearchChange={setSearch}
      />

      <div className="space-y-8">
        <ConfigCategorySection
          title="Shutter Finish Rates"
          category={ConfigCategory.FINISH}
          rates={data.data.shutterFinishRates}
          onCreate={handleCreate}
          // onUpdate={handleUpdate}
          // onToggle={handleToggle}
          // onDelete={handleDelete}
          isCreating={isCreating}
          // isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Cabinet Material Rates"
          category={ConfigCategory.MATERIAL}
          rates={data.data.cabinetMaterialRates}
          onCreate={handleCreate}
          // onUpdate={handleUpdate}
          // onToggle={handleToggle}
          // onDelete={handleDelete}
          isCreating={isCreating}
          // isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Handle Rates"
          category={ConfigCategory.HANDLE}
          rates={data.data.handleRates}
          onCreate={handleCreate}
          // onUpdate={handleUpdate}
          // onToggle={handleToggle}
          // onDelete={handleDelete}
          isCreating={isCreating}
          // isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Hinge Rates"
          category={ConfigCategory.HINGE}
          rates={data.data.hingeRates}
          onCreate={handleCreate}
          // onUpdate={handleUpdate}
          // onToggle={handleToggle}
          // onDelete={handleDelete}
          isCreating={isCreating}
          // isUpdating={isUpdating}
        />

        <ConfigCategorySection
          title="Accessory Rates"
          category={ConfigCategory.ACCESSORY}
          rates={data.data.accessoryRates}
          onCreate={handleCreate}
          // onUpdate={handleUpdate}
          // onToggle={handleToggle}
          // onDelete={handleDelete}
          isCreating={isCreating}
          // isUpdating={isUpdating}
        />
      </div>
    </div>
  );
}