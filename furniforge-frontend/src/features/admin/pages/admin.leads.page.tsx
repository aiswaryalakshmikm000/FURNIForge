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
import { AddLeadDialog } from "../components/leads/add-lead-dialog";
import { useGetAllLeads } from "../hooks/use-get-all-leads";
import { useGetAllDesignerOptions } from "../hooks/use-get-designer-options";
import { useAssignDesigner } from "../hooks/use-assign-designer";
import { LeadStatus, LeadSource, type LeadResponseDTO } from "../types/lead.type";
import { formatEnumLabel } from "../../../shared/utils/format-enum";
import { useCreateLead } from "../hooks/use-create-lead.";

export const DEFAULT_DELIVERABLES = [
  "Sofa",
  "TV unit",
  "Bed",
];

export default function AdminLeadsPage() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<LeadStatus | "All">("All");

  const [sourceFilter, setSourceFilter] =
    useState<LeadSource | "All">("All");

  const [deliverableFilter, setDeliverableFilter] =
    useState<string | "All">("All");

  const [sortOrder, setSortOrder] =
    useState<"asc" | "desc">("desc");

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedLead, setSelectedLead] =
    useState<LeadResponseDTO | null>(null);

  const [selectedDesignerId, setSelectedDesignerId] =
    useState("");

  const [activeAssignLeadId, setActiveAssignLeadId] =
    useState<string | null>(null);

  const [addLeadOpen, setAddLeadOpen] = useState(false);

  const { mutateAsync: assignDesigner } = useAssignDesigner();

  const { mutateAsync: createLead } = useCreateLead();

  const { data, isLoading } = useGetAllLeads({
    page,
    search: search || undefined,
    status: statusFilter === "All" ? undefined : statusFilter,
    source: sourceFilter === "All" ? undefined : sourceFilter,
    deliverable:
      deliverableFilter === "All"
        ? undefined
        : deliverableFilter,
    sortOrder,
  });

  const leads = data?.data?.leads ?? [];

  const total = data?.data?.total ?? 0;

  const limit = data?.data?.limit ?? 10;

  const totalPages = Math.ceil(total / limit);

  const { data: designersData } =
    useGetAllDesignerOptions();

  const designers =
    designersData?.data?.designers.map((designer) => ({
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
    if (!selectedLead || !selectedDesignerId) return;

    try {
      await assignDesigner({
        leadId: selectedLead.id,
        designerId: selectedDesignerId,
      });
      setConfirmOpen(false);
      setSelectedLead(null);
      setSelectedDesignerId("");
      setActiveAssignLeadId(null);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
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
              setStatusFilter(
                (value as LeadStatus | "All") || "All",
              );
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
              setSourceFilter(
                (value as LeadSource | "All") || "All",
              );
              setPage(1);
            },
          },
        ]}
        sortOptions={[
          { key: "desc", label: "Newest" },
          { key: "asc", label: "Oldest" },
        ]}
        sortValue={sortOrder}
        onSortChange={(value) => {
          setSortOrder(value as "asc" | "desc");
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
          designers.find(
            (d) => d.id === selectedDesignerId,
          )?.name ?? ""
        }
        onConfirm={handleAssignDesigner}
      />

      <AddLeadDialog
        open={addLeadOpen}
        onOpenChange={setAddLeadOpen}
        deliverables={DEFAULT_DELIVERABLES}
        onAddLead={async (lead) => {
    await createLead(lead);
    setAddLeadOpen(false);
  }}
      />
    </motion.div>
  );
}