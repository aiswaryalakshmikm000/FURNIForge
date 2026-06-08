import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { PremiumLoader } from "../../../shared/components/common/loader";
import { Button } from "../../../shared/components/ui/button";
import { DesignerCard } from "../../designers/components/designer-card";
import { useGetAllDesigners } from "../../designers/hooks/use-get-all-designers";
import { useDebounce } from "../../../shared/hooks/use-debounce";
import { DesignerFormDialog } from "../../designers/components/designer-form-dialog";
import { useCreateDesigner } from "../../designers/hooks/use-create-designer";
import type { DesignerResponseDTO } from "../../designers/types/get-all-designers.type";
import { useUpdateDesigner } from "../../designers/hooks/use-update-designer";
import { useToggleDesignerBlock } from "../../designers/hooks/use-toggle-designer-block";
import type { DesignerCommandResponseDTO } from "../../designers/types/designer-form.type";
import { useDeleteDesigner } from "../../designers/hooks/use-delete-designer";
import { ConfirmDialog } from "../../../shared/components/common/confirm-dialog";

export default function DesignersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [openModal, setOpenModal] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [designerToEdit, setDesignerToEdit] = useState<DesignerResponseDTO | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [designerToDelete, setDesignerToDelete] = useState<DesignerResponseDTO | null> (null);

  const { mutateAsync: updateDesigner, isPending: isUpdatingDesigner } = useUpdateDesigner();
  const {mutateAsync: createDesigner, isPending: isCreatingDesigner } = useCreateDesigner()
  const {mutateAsync: toggleDesignerBlock } = useToggleDesignerBlock();
  const {mutateAsync: deleteDesigner }= useDeleteDesigner();

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
            : "PENDING",
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

  const handleEdit = (designer: DesignerResponseDTO) => {
    setDesignerToEdit(designer);
    setEditOpen(true);
  };

  const handleOpenDelete = (designer: DesignerResponseDTO) => {
    setDesignerToDelete(designer);
    setDeleteOpen(true);
  };

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleToggleBlock = async (designer: DesignerCommandResponseDTO) => {
    await toggleDesignerBlock(designer.id)
  }

  const handleDeleteDesigner = async () => {
    if(!designerToDelete) return;
    try {
      await deleteDesigner(designerToDelete.id)
      setDesignerToDelete(null)
      setDeleteOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

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
          <Button
            variant="copper"
            size="sm"
            className="gap-1"
            onClick={handleAdd}
          >
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
              { label: "Pending", value: "Pending" },
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
            {designers.map((designer) => (
              <DesignerCard
                key={designer.id}
                designer={designer}
                onEdit={handleEdit}
                onDelete={handleOpenDelete}
                onToggleBlock={handleToggleBlock}
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
      <DesignerFormDialog
        mode="create"
        open={openModal}
        onOpenChange={setOpenModal}
        isLoading={isCreatingDesigner}
        onSubmit={async (data) => {
          await createDesigner(data);
        }}
      />

      <DesignerFormDialog
        mode="edit"
        open={editOpen}
        onOpenChange={setEditOpen}
        initialData={
          designerToEdit
            ? {
                firstName: designerToEdit.firstName,
                lastName: designerToEdit.lastName,
                email: designerToEdit.email,
                phone: designerToEdit.phone,
              }
            : undefined
        }
        isLoading={isUpdatingDesigner}
        onSubmit={async (data) => {
          if (!designerToEdit) return;

          const { email, ...payload } = data;

          await updateDesigner({
            designerId: designerToEdit.id,
            payload,
          });
        }}
      />

      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete Designer?"
        description={`Are you sure you want to delete ${designerToDelete?.firstName} ${designerToDelete?.lastName}?`}
        confirmText="Delete"
        variant="destructive"
        onConfirm={handleDeleteDesigner}
      />

    </motion.div>
  );
}
