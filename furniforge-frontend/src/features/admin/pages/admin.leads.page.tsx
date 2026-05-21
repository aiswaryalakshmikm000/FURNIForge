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
import { LeadStatus, LeadSource } from "../types/lead.type";
import { formatEnumLabel } from "../../../shared/utils/format-enum";

export const DEFAULT_DELIVERABLES = [
  "Sofa",
  "TV unit",
  "Living Room",
];

export default function AdminLeadsPage() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<LeadStatus | "All">("All");

  const [sourceFilter, setSourceFilter] = useState<LeadSource | "All">("All");

  const [deliverableFilter, setDeliverableFilter] = useState< string | "All">("All");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [selectedLead, setSelectedLead] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedDesigner, setSelectedDesigner] = useState("");

  const [addLeadOpen, setAddLeadOpen] = useState(false);

  const { data, isLoading } = useGetAllLeads({
    page,
    search: search || undefined,
    status: statusFilter === "All" ? undefined : statusFilter,
    source: sourceFilter === "All" ? undefined : sourceFilter,
    deliverable: deliverableFilter === "All" ? undefined : deliverableFilter,
    sortOrder,
  });

  const leads = data?.data?.leads ?? [];

  const total = data?.data?.total ?? 0;

  const limit = data?.data?.limit ?? 10;

  const totalPages = Math.ceil(total / limit);

  const openAssignDialog = (lead: any) => {
    setSelectedLead(lead);
    setConfirmOpen(true);
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
        onSearchChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        searchPlaceholder="Search leads..."
        filters={[
          {
            key: "status",
            label: "Status",
            options: [{label: "All", value: "All"}, ...Object.values(LeadStatus).map((status) => ({
              label: formatEnumLabel(status),
              value: status,
            })),],
            value: statusFilter,
            onChange: (val) => {
              setStatusFilter((val as LeadStatus | "All") || "All");

              setPage(1);
            },
          },
          {
            key: "deliverable",
            label: "Deliverable",
            options: [ { label: "All", value: "All" }, ...DEFAULT_DELIVERABLES.map((deliverable) => ({
              label: deliverable, value: deliverable
            }))],
            value: deliverableFilter ?? "",
            onChange: (val) => {
              setDeliverableFilter(val || "All");
              setPage(1);
            },
          },
          {
            key: "source",
            label: "Source",
            options: [{label: "All", value: "All"}, ... Object.values(LeadSource).map((source) => ({
              label: formatEnumLabel(source),
              value: source,
            }))],
            value: sourceFilter ?? "",
            onChange: (val) => {
              setSourceFilter((val as LeadSource | "All") || "All");

              setPage(1);
            },
          },
        ]}
        sortOptions={[
          {
            key: "desc",
            label: "Newest",
          },
          {
            key: "asc",
            label: "Oldest",
          },
        ]}
        sortValue={sortOrder}
        onSortChange={(v) => {
          setSortOrder(v as typeof sortOrder);
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
        <div className="space-y-4">
          {leads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onConfirmAssign={() => openAssignDialog(lead)}
            />
          ))}

          <PaginationControl
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            totalItems={total}
            itemsPerPage={limit}
          />
        </div>
      )}

      <AssignLeadDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        selectedLead={selectedLead}
        selectedDesigner={selectedDesigner}
        onConfirm={() => {}}
      />

      <AddLeadDialog
        open={addLeadOpen}
        onOpenChange={setAddLeadOpen}
        leadSources={Object.values(LeadSource)}
        deliverables={[]}
        onAddLead={() => {}}
      />
    </motion.div>
  );
}
