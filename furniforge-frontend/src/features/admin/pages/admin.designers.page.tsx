import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { PremiumLoader } from "../../../shared/components/common/loader";
import { Button } from "../../../shared/components/ui/button";
import { DesignerCard } from "../components/designers/designer-card";
import { useGetAllDesigners } from "../hooks/use-get-all-designers";
import { useDebounce } from "../../../shared/hooks/use-debounce";
import { DesignerModal } from "../components/designers/designer-form-dialog";

export default function DesignersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const { data, isLoading } = useGetAllDesigners({
    page,
    search: debouncedSearch || undefined,
    status:
      statusFilter === "All"
        ? undefined
        : statusFilter === "Active"
          ? "ACTIVE"
          : statusFilter === "Blocked"
            ? "BLOCKED"
            : "INACTIVE",
    sortBy: sortBy === "none" ? undefined : (sortBy as any),
    sortOrder,
  });

  const designers = data?.data?.designers ?? [];
  const total = data?.data?.total ?? 0;
  const limit = data?.data?.limit ?? 10;
  const totalPages = data?.data?.totalPages ?? 1;

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  };

  const handleEdit = (designer: any) => {
    setEditData(designer);
    setOpenModal(true);
  };

  const handleAdd = () => {
    setEditData(null);
    setOpenModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* HEADER */}
      <PageHeader
        title="Designers"
        description="Manage your design team"
        action={
          <Button variant="copper" size="sm"
            className="gap-1" onClick={handleAdd}>
            <Plus size={14} />
            Add Designer
          </Button>
        }
      />

      {/* FILTERS */}
      <FilterSortDropdown
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        searchPlaceholder="Search by name or email..."
        filters={[
          {
            key: "status",
            label: "Status",
            value: statusFilter,
            options: [
              { label: "All", value: "All" },
              { label: "Active", value: "Active" },
              { label: "Blocked", value: "Blocked" },
              { label: "Inactive", value: "Inactive" },
            ],
            onChange: (value) => {
              setStatusFilter(value);
              setPage(1);
            },
          },
        ]}
        sortOptions={[
          { key: "createdAt", label: "Date" },
          { key: "rating", label: "Rating" },
          { key: "projects", label: "Projects" },
          { key: "revenue", label: "Revenue" },
        ]}
        sortValue={sortBy}
        onSortChange={(value) => {
          setSortBy(value);
          setPage(1);
        }}
        sortOrder={sortOrder}
        onSortOrderChange={(value) => {
          setSortOrder(value);
          setPage(1);
        }}
        onReset={resetFilters}
      />

      {/* CONTENT */}
      {isLoading ? (
        <PremiumLoader />
      ) : designers.length === 0 ? (
        <EmptyState
          title="No designers found"
          description="Try adjusting filters."
        />
      ) : (
        <>
          <div className="space-y-4">
            {designers.map((designer: any) => (
              <DesignerCard
                key={designer.id}
                designer={designer}
                onEdit={handleEdit}
                onDelete={() => {}}
                onToggleBlock={() => {}}
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

      {/* MODAL */}
      <DesignerModal
        open={openModal}
        mode={editData ? "edit" : "add"}
        initialData={editData}
        onClose={() => setOpenModal(false)}
        onSubmit={() => {
          setOpenModal(false);
        }}
      />
    </motion.div>
  );
}
