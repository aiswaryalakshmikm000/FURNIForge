import { useState } from "react";
import { Info } from "lucide-react";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { useDebounce } from "../../../shared/hooks/use-debounce";
import { PageHeader } from "../../../shared/components/common/page-header";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { PremiumLoader } from "../../../shared/components/common/loader";
import { Button } from "../../../shared/components/ui/button";
import { useGetRequirementFieldDeliverables } from "../../requirement-fields/hooks/use-get-requirement-field-deliverables";
import { RequirementDeliverableAccordion } from "../../requirement-fields/components/DeliverableAccordion";
import { HowItWorksDialog } from "../../requirement-fields/components/HowItWorksDialog";

export default function AdminRequirementFieldsPage() {
  const [showInfo, setShowInfo] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedDeliverableId, setExpandedDeliverableId] = useState<
    string | null
  >(null);

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useGetRequirementFieldDeliverables({
    search: debouncedSearch || undefined,
  });

  const deliverables = data?.data?.deliverables ?? [];
  const activeDeliverableId = expandedDeliverableId ?? deliverables[0]?.id ?? null;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <PageHeader
          title="Requirement Fields"
          description="Configure deliverables, templates and requirement fields."
        />

        <Button variant="outline" onClick={() => setShowInfo(true)}>
          <Info className="h-4 w-4 mr-2" />
          How it works
        </Button>
      </div>

      <HowItWorksDialog open={showInfo} onOpenChange={setShowInfo} />

      <FilterSortDropdown
        search={search}
        searchPlaceholder="Search deliverable or template..."
        onSearchChange={setSearch}
      />

      {isLoading ? (
        <div className="py-20 flex justify-center">
          <PremiumLoader />
        </div>
      ) : deliverables.length === 0 ? (
        <EmptyState
          title="No Deliverables Found"
          description="No deliverables available."
        />
      ) : (
        <div className="space-y-4">
          {deliverables.map((deliverable) => (
            <RequirementDeliverableAccordion
              key={deliverable.id}
              deliverable={deliverable}
              isOpen={activeDeliverableId === deliverable.id}
              onToggle={() =>
                setExpandedDeliverableId((prev) =>
                  prev === deliverable.id ? null : deliverable.id,
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
