import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { Button } from "../../../shared/components/ui/button";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { usePagination } from "../../../shared/hooks/use-pagination";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { PageHeader } from "../../../shared/components/common/page-header";

import { LeadCard } from "../components/leads/lead-card";
import { AssignLeadDialog } from "../components/leads/assign-lead-dialog";
import type { Lead } from "../types/lead.type";
import { DESIGNERS, LEAD_SOURCES, ALL_DELIVERABLES } from "../constants/leads.constants";
import { AddLeadDialog } from "../components/leads/add-lead-dialog";

type SortKey = "none" | "date";

const initialLeads: Lead[] = [
  {
    id: "LED239-03-26",
    name: "Rohit Mehta",
    phone: "+91 98123 45678",
    location: "Mumbai",
    types: ["Wardrobe"],
    date: "Feb 17, 2026",
    assignedTo: "",
    status: "Unassigned",
    source: "Website",
  },

  {
    id: "LED110-04-26",
    name: "Anjali Verma",
    phone: "+91 99876 12345",
    location: "Delhi",
    types: ["TV Unit", "Sofa"],
    date: "Mar 05, 2026",
    assignedTo: "Sneha Kulkarni",
    status: "Assigned",
    source: "Referral",
  },

  {
    id: "LED202-04-26",
    name: "Vikram Rao",
    phone: "+91 98765 33321",
    location: "Bangalore",
    types: ["Office Desk"],
    date: "Apr 01, 2026",
    assignedTo: "",
    status: "Unassigned",
    source: "Website",
  },
];

export default function AdminLeadsPage() {
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [typeFilter, setTypeFilter] = useState("All");

  const [sourceFilter, setSourceFilter] = useState("All");

  const [sortKey, setSortKey] = useState<SortKey>("none");

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [assigningId, setAssigningId] = useState<string | null>(null);

  const [selectedDesigner, setSelectedDesigner] = useState("");

  const [leads, setLeads] = useState<Lead[]>(initialLeads);

const [addLeadOpen, setAddLeadOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = leads.filter((l) => {
      const matchesSearch =
        search === "" ||
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter === "All" || l.status === statusFilter;

      const matchesType = typeFilter === "All" || l.types.includes(typeFilter);

      const matchesSource = sourceFilter === "All" || l.source === sourceFilter;

      return matchesSearch && matchesStatus && matchesType && matchesSource;
    });

    if (sortKey === "date") {
      list = [...list].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    }

    return list;
  }, [search, statusFilter, typeFilter, sourceFilter, sortKey]);

  const {
    currentPage,
    totalPages,
    paginatedItems,
    setCurrentPage,
    totalItems,
    itemsPerPage,
  } = usePagination(filtered, 5);

  const openAssignDialog = (lead: Lead) => {
    setSelectedLead(lead);
    setConfirmOpen(true);
  };

  const handleAssignLead = () => {
    if (!selectedLead || !selectedDesigner) return;

    console.log(`Assign ${selectedLead.name} to ${selectedDesigner}`);

    setConfirmOpen(false);
    setSelectedLead(null);
    setAssigningId(null);
    setSelectedDesigner("");
  };

  const handleAddLead = (leadData: {
  name: string;
  phone: string;
  location: string;
  types: string[];
  source: string;
}) => {
  const newLead: Lead = {
    id: `LED${Math.floor(Math.random() * 1000)}-04-26`,
    name: leadData.name,
    phone: leadData.phone,
    location: leadData.location,
    types: leadData.types,
    source: leadData.source,
    assignedTo: "",
    status: "Unassigned",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };

  setLeads((prev) => [newLead, ...prev]);
};

  const resetFilters = () => {
    setStatusFilter("All");
    setTypeFilter("All");
    setSourceFilter("All");
    setSortKey("none");
    setSearch("");
    setCurrentPage(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <PageHeader
        title="All Leads"
        description="Manage and assign leads to designers"
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
          setCurrentPage(1);
        }}
        searchPlaceholder="Search by name or location..."
        filters={[
          {
            key: "status",
            label: "Status",
            options: ["All", "Assigned", "Unassigned"],
            value: statusFilter,
            onChange: (val) => {
              setStatusFilter(val);
              setCurrentPage(1);
            },
          },

          {
            key: "type",
            label: "Deliverable",
            options: ["All", ...ALL_DELIVERABLES],
            value: typeFilter,
            onChange: (val) => {
              setTypeFilter(val);
              setCurrentPage(1);
            },
          },

          {
            key: "source",
            label: "Source",
            options: ["All", ...LEAD_SOURCES],
            value: sourceFilter,
            onChange: (val) => {
              setSourceFilter(val);
              setCurrentPage(1);
            },
          },
        ]}
        sortOptions={[
          {
            key: "date",
            label: "Date",
          },
        ]}
        sortValue={sortKey}
        onSortChange={(v) => {
          setSortKey(v as SortKey);
          setCurrentPage(1);
        }}
        onReset={resetFilters}
      />

      {paginatedItems.length === 0 ? (
        <EmptyState
          title="No leads found"
          description="Try adjusting your filters or search keywords."
        />
      ) : (
        <div className="space-y-4">
          {paginatedItems.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              designers={DESIGNERS}
              assigning={assigningId === lead.id}
              selectedDesigner={selectedDesigner}
              onDesignerChange={setSelectedDesigner}
              onStartAssign={() => {
                setAssigningId(lead.id);
                setSelectedDesigner("");
              }}
              onCancelAssign={() => {
                setAssigningId(null);
                setSelectedDesigner("");
              }}
              onConfirmAssign={() => openAssignDialog(lead)}
            />
          ))}

          <PaginationControl
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}

      <AssignLeadDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        selectedLead={selectedLead}
        selectedDesigner={selectedDesigner}
        onConfirm={handleAssignLead}
      />

      <AddLeadDialog
  open={addLeadOpen}
  onOpenChange={setAddLeadOpen}
  leadSources={LEAD_SOURCES}
  deliverables={ALL_DELIVERABLES}
  onAddLead={handleAddLead}
/>
    </motion.div>
  );
}
