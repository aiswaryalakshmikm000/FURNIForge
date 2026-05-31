import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { PageHeader } from "../../../shared/components/common/page-header";
import { LeadCard } from "../components/leads/lead-card";
import { AssignLeadDialog } from "../components/leads/assign-lead-dialog";
import { LeadFormDialog } from "../components/leads/lead-form-dialog";
import { useGetAllLeads } from "../hooks/use-get-all-leads";
import { useGetAllDesignerOptions } from "../hooks/use-get-designer-options";
import { useAssignDesigner } from "../hooks/use-assign-designer";
import { useCreateLead } from "../hooks/use-create-lead.";
import { useDebounce } from "../../../shared/hooks/use-debounce";
import { LeadStatus, LeadSource, type LeadResponseDTO, PackageType } from "../types/lead.type";
import { formatEnumLabel } from "../../../shared/utils/format-enum";
import { ConfirmDialog } from "../../../shared/components/common/confirm-dialog";
import { useDeleteLead } from "../hooks/use-delete-leaad";
import { useUpdateLead } from "../hooks/use-update-lead";

export const DEFAULT_DELIVERABLES = [ "Sofa", "TV unit", "Bed"];

export default function AdminLeadsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500)
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "All">("All");
  const [sourceFilter, setSourceFilter] = useState<LeadSource | "All">("All");
  const [deliverableFilter, setDeliverableFilter] = useState<string | "All">("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<LeadResponseDTO | null>(null);
  const [selectedDesignerId, setSelectedDesignerId] = useState("");
  const [activeAssignLeadId, setActiveAssignLeadId] = useState<string | null>(null);
  const [assigningLeadId, setAssigningLeadId] = useState<string | null>(null);
  const [addLeadOpen, setAddLeadOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<LeadResponseDTO | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [leadToEdit, setLeadToEdit] = useState<LeadResponseDTO | null>(null);

  const { mutateAsync: assignDesigner } = useAssignDesigner();
  const { mutateAsync: createLead, isPending :isAddingLead } = useCreateLead();
  const { mutateAsync: deleteLead } = useDeleteLead();
  const { mutateAsync: updateLead, isPending: isUpdatingLead } = useUpdateLead();

  const { data, isLoading } = useGetAllLeads({
    page,
    search: debouncedSearch || undefined,
    status:
      statusFilter === "All"
        ? undefined
        : statusFilter,
    source:
      sourceFilter === "All"
        ? undefined
        : sourceFilter,
    deliverable:
      deliverableFilter === "All"
        ? undefined
        : deliverableFilter,
    sortOrder,
  });

  const leads = data?.data?.leads ?? [];
  const total = data?.data?.total ?? 0;
  const limit = data?.data?.limit ?? 10;
  const totalPages = data?.data?.totalPages ?? 1

  const { data: designersData } = useGetAllDesignerOptions();

  const designers = designersData?.data?.designers.map((designer) => ({
        id: designer.id,
        name: designer.fullName,
      })) ?? [];

  const openAssignDialog = (
    lead: LeadResponseDTO,
    designerId: string,
  ) => {
    setSelectedLead(lead);
    setSelectedDesignerId(designerId);
    setConfirmOpen(true);
  };

  const handleAssignDesigner = async () => {
    if ( !selectedLead || !selectedDesignerId ) return;
    try {
      setAssigningLeadId(selectedLead.id);
      await assignDesigner({ leadId: selectedLead.id, designerId: selectedDesignerId });
      setConfirmOpen(false);
      setSelectedLead(null);
      setSelectedDesignerId("");
      setActiveAssignLeadId(null);
    } catch (error) {
      console.error(error);
    } finally {
    setAssigningLeadId(null);
    }
  };

  const handleDeleteLead = async () => {
    if (!leadToDelete) return;

    try {
      await deleteLead(leadToDelete.id);
      setDeleteOpen(false);
      setLeadToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setSourceFilter("All");
    setDeliverableFilter("All");
    setSortOrder("desc");
    setPage(1);
  };

  const handleOpenDelete = (lead: LeadResponseDTO) => {
    setLeadToDelete(lead);
    setDeleteOpen(true);
  };

  const handleOpenEdit = (lead: LeadResponseDTO) => {
    setLeadToEdit(lead);
    setEditOpen(true);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="space-y-6"
    >
      <PageHeader
        title="All Leads"
        description="Manage and assign leads"
        action={
          <Button
            variant="copper"
            size="sm"
            className="gap-1"
            onClick={() => setAddLeadOpen(true)}
          >
            <Plus size={14} />
            Add Lead
          </Button>
        }
      />

      <FilterSortDropdown
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        searchPlaceholder="Search leads..."
        filters={[
          {
            key: "status",
            label: "Status",
            value: statusFilter,
            options: [
              { label: "All", value: "All" },
              ...Object.values(LeadStatus).map((status) => ({
                label: formatEnumLabel(status),
                value: status,
              })),
            ],
            onChange: (value) => {
              setStatusFilter((value as LeadStatus | "All") || "All");
              setPage(1);
            },
          },

          {
            key: "deliverable",
            label: "Deliverable",
            value: deliverableFilter,
            options: [
              { label: "All", value: "All" },
              ...DEFAULT_DELIVERABLES.map((item) => ({
                label: item,
                value: item,
              })),
            ],
            onChange: (value) => {
              setDeliverableFilter(value || "All");
              setPage(1);
            },
          },

          {
            key: "source",
            label: "Source",
            value: sourceFilter,
            options: [
              { label: "All", value: "All" },
              ...Object.values(LeadSource).map((source) => ({
                label: formatEnumLabel(source),
                value: source,
              })),
            ],
            onChange: (value) => {
              setSourceFilter((value as LeadSource | "All") || "All");
              setPage(1);
            },
          },
        ]}
        sortOptions={[{ key: "createdAt", label: "Date" }]}
        sortValue="createdAt"
        onSortChange={() => {}}
        sortOrder={sortOrder}
        onSortOrderChange={(value) => {
          setSortOrder(value);
          setPage(1);
        }}
        onReset={resetFilters}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : leads.length === 0 ? (
        <EmptyState
          title="No leads found"
          description="Try adjusting filters."
        />
      ) : (
        <>
          <div className="space-y-4">
            {leads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                designers={designers}
                activeAssignLeadId={activeAssignLeadId}
                setActiveAssignLeadId={setActiveAssignLeadId}
                onConfirmAssign={openAssignDialog}
                isAssigning={assigningLeadId === lead.id}
                onDelete={handleOpenDelete}
                onEdit={handleOpenEdit}
              />
            ))}
          </div>

          <PaginationControl
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            totalItems={total}
            itemsPerPage={limit}
          />
        </>
      )}

      <AssignLeadDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        selectedLead={selectedLead}
        selectedDesigner={
          designers.find((d) => d.id === selectedDesignerId)?.name ?? ""
        }
        onConfirm={handleAssignDesigner}
      />

      <LeadFormDialog
        mode="create"
        open={addLeadOpen}
        onOpenChange={setAddLeadOpen}
        deliverables={DEFAULT_DELIVERABLES}
        isLoading= {isAddingLead}
        onSubmit={async(data) => {await createLead({...data, email: data.email!})}}
      />

      <LeadFormDialog
        mode="edit"
        open={editOpen}
        onOpenChange={setEditOpen}
        deliverables={DEFAULT_DELIVERABLES}
        isLoading= {isUpdatingLead}
        initialData={ leadToEdit ? {
                name: leadToEdit.name,
                email: leadToEdit.email,
                phone: leadToEdit.phone,
                location: leadToEdit.location ?? "",
                source: leadToEdit.source,
                packageType: leadToEdit.packageType ?? PackageType.BASIC,
                projectsInterestedIn: leadToEdit.projectsInterestedIn,
              } : undefined }
        
        onSubmit={async(data) => {
          if(!leadToEdit) return;
          const {email, ...payload} = data;
          await updateLead ({leadId: leadToEdit.id, payload})
        }}
      />

      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete Lead?"
        description={`Are you sure you want to delete ${leadToDelete?.name}?`}
        confirmText="Delete"
        variant="destructive"
        onConfirm={handleDeleteLead}
      />
    </motion.div>
  );
}