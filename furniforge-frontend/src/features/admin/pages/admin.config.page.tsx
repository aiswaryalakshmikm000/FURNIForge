import { useState } from "react";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { Button } from "../../../shared/components/ui/button";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { useGetAllConfigRates } from "../../config/hooks/use-get-config-rates";
import type { ConfigRateResponseDTO } from "../../config/types/get-all-config-rates.type";
import { ConfigCategorySection } from "../../config/components/ConfigCategorySection";


export default function AdminConfigRatesPage() {
  const [search, setSearch] = useState("");

  const {
    data: configRates,
    isLoading,
    isError,
    refetch,
  } = useGetAllConfigRates({
    search: search || undefined,
  });

  const handleEdit = (rate: ConfigRateResponseDTO) => {
    console.log("Edit", rate);
  };

  const handleToggleStatus = (rate: ConfigRateResponseDTO) => {
    console.log("Toggle", rate);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="Config Rates"
          description="Manage furniture configuration rates"
        />

        <div className="flex justify-center py-20">
          Loading...
        </div>
      </div>
    );
  }

  if (isError || !configRates) {
    return (
      <EmptyState
        title="Failed to load configuration rates"
        description="Something went wrong while loading the configuration rates."
        action={
          <Button onClick={() => refetch()}>
            Retry
          </Button>
        }
      />
    );
  }

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Configuration"
          description="Manage unit rates — add, edit or remove items with brands"
        />

        <FilterSortDropdown
          search={search}
          searchPlaceholder="Search item name and category..."
          onSearchChange={setSearch}
        />

        <div className="space-y-8">
              <ConfigCategorySection
                title="Shutter Finish Rates"
                rates={configRates.data.shutterFinishRates}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
              />

              <ConfigCategorySection
                title="Cabinet Material Rates"
                rates={configRates.data.cabinetMaterialRates}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
              />

              <ConfigCategorySection
                title="Handle Rates"
                rates={configRates.data.handleRates}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
              />

              <ConfigCategorySection
                title="Hinge Rates"
                rates={configRates.data.hingeRates}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
              />

              <ConfigCategorySection
                title="Accessory Rates"
                rates={configRates.data.accessoryRates}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
              />
          </div>
      </div>
    </>
  );
}