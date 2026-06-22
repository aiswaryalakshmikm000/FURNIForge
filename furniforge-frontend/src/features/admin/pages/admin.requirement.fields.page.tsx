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
import { TemplateFormDialog } from "../../requirement-fields/components/TemplateFormDialog";
import { useCreateTemplate } from "../../requirement-fields/hooks/use-create-template";
import type { TemplateFormValues } from "../../requirement-fields/validation/template-form.validation";
import type { RequirementFieldTemplateResponseDTO } from "../../requirement-fields/types/template.type";
import { useUpdateTemplate } from "../../requirement-fields/hooks/use-update-template";
import { useSoftDeleteTemplate } from "../../requirement-fields/hooks/use-soft-delete-template";
import { ConfirmDialog } from "../../../shared/components/common/confirm-dialog";
import { useToggleTemplateStatus } from "../../requirement-fields/hooks/use-toggle-template-status";

export default function AdminRequirementFieldsPage() {
  const [showInfo, setShowInfo] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedDeliverableId, setExpandedDeliverableId] = useState<
    string | null
  >(null);
  const [createTemplateOpen, setCreateTemplateOpen] = useState(false);

  const [selectedDeliverableId, setSelectedDeliverableId] = useState<
    string | null
  >(null);
  const [editTemplateOpen, setEditTemplateOpen] = useState(false);
  const [templateToEdit, setTemplateToEdit] =
    useState<RequirementFieldTemplateResponseDTO | null>(null);

  const [softDeleteOpen, setSoftDeleteOpen] = useState(false);
  const [templateToDelete, setTemplateToDelete] =
    useState<RequirementFieldTemplateResponseDTO | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useGetRequirementFieldDeliverables({
    search: debouncedSearch || undefined,
  });

  const deliverables = data?.data?.deliverables ?? [];
  const activeDeliverableId =
    expandedDeliverableId ?? deliverables[0]?.id ?? null;

  const { mutateAsync: createTemplate, isPending: isCreatingTemplate } =
    useCreateTemplate();
  const { mutateAsync: updateTemplate, isPending: isUpdatingTemplate } =
    useUpdateTemplate();
  const { mutateAsync: softDeleteTemplate, isPending: isSoftDeletingTemplate } =
    useSoftDeleteTemplate();
  const { mutateAsync: toggleTemplateStatus } = useToggleTemplateStatus();

  const handleAddTemplate = (deliverableId: string) => {
    setSelectedDeliverableId(deliverableId);
    setCreateTemplateOpen(true);
  };

  const handleCreateTemplate = async (data: TemplateFormValues) => {
    if (!selectedDeliverableId) return;

    await createTemplate({
      deliverableId: selectedDeliverableId,
      ...data,
    });
  };

  const handleEditTemplate = (
    template: RequirementFieldTemplateResponseDTO,
  ) => {
    setTemplateToEdit(template);
    setEditTemplateOpen(true);
  };

  const handleUpdateTemplate = async (data: TemplateFormValues) => {
    if (!templateToEdit) return;

    await updateTemplate({
      templateId: templateToEdit.id,
      payload: data,
    });
  };

  const handleSoftDeleteTemplate = (
    template: RequirementFieldTemplateResponseDTO,
  ) => {
    setTemplateToDelete(template);
    setSoftDeleteOpen(true);
  };

  const handleConfirmSoftDeleteTemplate = async () => {
    if (!templateToDelete) return;

    await softDeleteTemplate({ templateId: templateToDelete.id });
    setSoftDeleteOpen(false);
    setTemplateToDelete(null);
  };

  const handleToggleTemplateStatus = async (
    template: RequirementFieldTemplateResponseDTO,
  ) => {
    try {
      await toggleTemplateStatus(template.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <TemplateFormDialog
          open={createTemplateOpen}
          onOpenChange={setCreateTemplateOpen}
          mode="create"
          isLoading={isCreatingTemplate}
          onSubmit={handleCreateTemplate}
        />

        <TemplateFormDialog
          open={editTemplateOpen}
          onOpenChange={setEditTemplateOpen}
          mode="edit"
          isLoading={isUpdatingTemplate}
          initialData={
            templateToEdit
              ? {
                  name: templateToEdit.name,
                  description: templateToEdit.description,
                }
              : undefined
          }
          onSubmit={handleUpdateTemplate}
        />

        <ConfirmDialog
          open={softDeleteOpen}
          onOpenChange={setSoftDeleteOpen}
          title="Archive Template"
          description={`Archive ${templateToDelete?.name}?`}
          confirmText={isSoftDeletingTemplate ? "Archiving..." : "Archive"}
          onConfirm={handleConfirmSoftDeleteTemplate}
        />

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
              onAddTemplate={handleAddTemplate}
              onEditTemplate={handleEditTemplate}
              onSoftDeleteTemplate={handleSoftDeleteTemplate}
              onToggleTemplateStatus={handleToggleTemplateStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}
