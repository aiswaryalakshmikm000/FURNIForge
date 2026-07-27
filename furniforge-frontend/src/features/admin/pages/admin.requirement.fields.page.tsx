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
import type { TabFormValues } from "../../requirement-fields/validation/tab-form.validation";
import { TabFormDialog } from "../../requirement-fields/components/TabFormDialog";
import { useCreateTab } from "../../requirement-fields/hooks/use-create-tab";
import type { RequirementFieldTabResponseDTO } from "../../requirement-fields/types/tab.type";
import { useUpdateTab } from "../../requirement-fields/hooks/use-update-tab";
import { useToggleTabStatus } from "../../requirement-fields/hooks/use-toggle-tab-status";
import { useSoftDeleteTab } from "../../requirement-fields/hooks/use-soft-delete-tab";
import { useCreateField } from "../../requirement-fields/hooks/use-create-field";
import type { FieldFormValues } from "../../requirement-fields/validation/field-form-validation";
import { useUpdateField } from "../../requirement-fields/hooks/use-update-field";
import { useSoftDeleteField } from "../../requirement-fields/hooks/use-soft-delete-field";
import type { RequirementFieldResponseDTO } from "../../requirement-fields/types/field.type";

export default function AdminRequirementFieldsPage() {
  const [showInfo, setShowInfo] = useState(false);
  const [search, setSearch] = useState("");
  const [nextDisplayOrder, setNextDisplayOrder] = useState(1);
  const [expandedDeliverableId, setExpandedDeliverableId] = useState< string | null >(null);
  const [createTemplateOpen, setCreateTemplateOpen] = useState(false);
  const [createTabOpen, setCreateTabOpen] = useState(false);

  const [selectedDeliverableId, setSelectedDeliverableId] = useState< string | null >(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>( null );

  const [editTemplateOpen, setEditTemplateOpen] = useState(false);
  const [templateToEdit, setTemplateToEdit] = useState<RequirementFieldTemplateResponseDTO | null>(null);

  const [softDeleteOpen, setSoftDeleteOpen] = useState(false);
  const [templateToDelete, setTemplateToDelete] = useState<RequirementFieldTemplateResponseDTO | null>(null);

  const [editTabOpen, setEditTabOpen] = useState(false);
  const [tabToEdit, setTabToEdit] = useState<RequirementFieldTabResponseDTO | null>(null);

  const [softDeleteTabOpen, setSoftDeleteTabOpen] = useState(false);
  const [tabToDelete, setTabToDelete] = useState<RequirementFieldTabResponseDTO | null>(null);

  const [softDeleteFieldOpen, setSoftDeleteFieldOpen] = useState(false);
  const [fieldToDelete, setFieldToDelete] = useState<RequirementFieldResponseDTO | null>(null);
  
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useGetRequirementFieldDeliverables({
    search: debouncedSearch || undefined,
  });

  const deliverables = data?.data?.deliverables ?? [];
  const activeDeliverableId =
    expandedDeliverableId ?? deliverables[0]?.id ?? null;

  const { mutateAsync: createTemplate, isPending: isCreatingTemplate } = useCreateTemplate();
  const { mutateAsync: updateTemplate, isPending: isUpdatingTemplate } = useUpdateTemplate();
  const { mutateAsync: softDeleteTemplate, isPending: isSoftDeletingTemplate } = useSoftDeleteTemplate();
  const { mutateAsync: toggleTemplateStatus } = useToggleTemplateStatus();

  const { mutateAsync: createTab, isPending: isCreatingTab } = useCreateTab();
  const { mutateAsync: updateTab, isPending: isUpdatingTab } = useUpdateTab();
  const { mutateAsync: toggleTabStatus } = useToggleTabStatus();
  const { mutateAsync: softDeleteTab, isPending: isSoftDeletingTab } = useSoftDeleteTab();

  const { mutateAsync: createField, isPending: isCreatingField } = useCreateField();
  const { mutateAsync: updateField, isPending: isUpdatingField } = useUpdateField();
  const { mutateAsync: softDeleteField, isPending: isSoftDeletingField } = useSoftDeleteField();

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

  const handleAddTab = (templateId: string, nextOrder: number) => {
    setSelectedTemplateId(templateId);
    setNextDisplayOrder(nextOrder);
    setCreateTabOpen(true);
  };

  const handleCreateTab = async (data: TabFormValues) => {
    if (!selectedTemplateId) return;

    await createTab({
      templateId: selectedTemplateId,
      ...data,
    });
  };

  const handleEditTab = (tab: RequirementFieldTabResponseDTO) => {
    setTabToEdit(tab);
    setEditTabOpen(true);
  };

  const handleUpdateTab = async (data: TabFormValues) => {
    if (!tabToEdit) return;

    await updateTab({
      tabId: tabToEdit.id,
      payload: data,
    });
  };

  const handleToggleTabStatus = async (tab: RequirementFieldTabResponseDTO) => {
    try {
      await toggleTabStatus(tab.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSoftDeleteTab = (tab: RequirementFieldTabResponseDTO) => {
    setTabToDelete(tab);
    setSoftDeleteTabOpen(true);
  };

  const handleConfirmSoftDeleteTab = async () => {
    if (!tabToDelete) return;

    await softDeleteTab({
      tabId: tabToDelete.id,
    });

    setSoftDeleteTabOpen(false);
    setTabToDelete(null);
  };

  const handleCreateField = async (tabId: string, data: FieldFormValues) => {
    await createField({
      tabId,
      ...data,
    });
  };

  const handleUpdateField = async (fieldId: string, data: FieldFormValues) => {
    await updateField({ fieldId, payload: data  });
  };

  const handleSoftDeleteField = ( field: RequirementFieldResponseDTO ) => {
  setFieldToDelete(field);
  setSoftDeleteFieldOpen(true);
};

const handleConfirmSoftDeleteField = async () => {
  if (!fieldToDelete) return;

  await softDeleteField({ fieldId: fieldToDelete.id });
  setSoftDeleteFieldOpen(false);
  setFieldToDelete(null);
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

        <TabFormDialog
          open={createTabOpen}
          onOpenChange={setCreateTabOpen}
          mode="create"
          isLoading={isCreatingTab}
          initialData={{
            name: "",
            displayOrder: nextDisplayOrder,
          }}
          onSubmit={handleCreateTab}
        />

        <TabFormDialog
          open={editTabOpen}
          onOpenChange={setEditTabOpen}
          mode="edit"
          isLoading={isUpdatingTab}
          initialData={
            tabToEdit
              ? {
                  name: tabToEdit.name,
                  displayOrder: tabToEdit.displayOrder,
                }
              : undefined
          }
          onSubmit={handleUpdateTab}
        />

        <ConfirmDialog
          open={softDeleteOpen}
          onOpenChange={setSoftDeleteOpen}
          title="Archive Template"
          description={`Archive ${templateToDelete?.name}?`}
          confirmText={isSoftDeletingTemplate ? "Archiving..." : "Archive"}
          onConfirm={handleConfirmSoftDeleteTemplate}
        />

        <ConfirmDialog
          open={softDeleteTabOpen}
          onOpenChange={setSoftDeleteTabOpen}
          title="Archive Tab"
          description={`Archive ${tabToDelete?.name}?`}
          confirmText={isSoftDeletingTab ? "Archiving..." : "Archive"}
          onConfirm={handleConfirmSoftDeleteTab}
        />

        <ConfirmDialog
  open={softDeleteFieldOpen}
  onOpenChange={setSoftDeleteFieldOpen}
  title="Archive Field"
  description={`Archive ${fieldToDelete?.label}?`}
  confirmText={isSoftDeletingField ? "Archiving..." : "Archive"}
  onConfirm={handleConfirmSoftDeleteField}
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
              onAddTab={handleAddTab}
              onEditTab={handleEditTab}
              onToggleTabStatus={handleToggleTabStatus}
              onSoftDeleteTab={handleSoftDeleteTab}
              onCreateField={handleCreateField}
              isCreatingField={isCreatingField}
              onUpdateField={handleUpdateField}
              isUpdatingField={isUpdatingField}
              onSoftDeleteField={handleSoftDeleteField}
            />
          ))}
        </div>
      )}
    </div>
  );
}
