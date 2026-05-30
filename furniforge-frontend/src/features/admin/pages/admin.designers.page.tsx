import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { DesignerCard } from "../components/designers/designer-card";
import { useGetAllDesigners } from "../hooks/use-get-all-designers";
import { PremiumLoader } from "../../../shared/components/common/loader";
import { useDebounce } from "../../../shared/hooks/use-debounce";

export default function DesignersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const { data, isLoading } = useGetAllDesigners({
    page,
    search: debouncedSearch || undefined,
    status: statusFilter === "All" 
          ? undefined : statusFilter === "Active"
          ? "ACTIVE" : statusFilter === "Blocked"
          ? "BLOCKED" : "INACTIVE",
    sortBy: sortBy === "none"
          ? undefined : (sortBy as "rating" | "projects" | "revenue" | "createdAt"),
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
    setPage(1);
    setSortOrder("desc")
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
      <PageHeader title="Designers" description="Manage your design team" />

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
              { label: "Inactive", value: "Inactive" },
              { label: "Blocked", value: "Blocked" },
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
            {designers.map((designer) => (
              <DesignerCard
                key={designer.id}
                designer={designer}
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
    </motion.div>
  );
}
