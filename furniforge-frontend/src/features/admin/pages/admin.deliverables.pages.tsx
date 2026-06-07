import { useState } from "react";
import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import type { DeliverableResponseDTO } from "../../deliverables/types/get-all-deliverables.type";
import { useGetAllDeliverables } from "../../deliverables/hooks/use-get-all-deliverables";
import { Button } from "../../../shared/components/ui/button";
import { Plus } from "lucide-react";
import { useCreateDeliverable } from "../../deliverables/hooks/use-create-deliverable";
import type { DeliverableFormValues } from "../../deliverables/validation/deliverable-form.validation";
import { DeliverableFormDialog } from "../../deliverables/components/DeliverableFormDialog";
import { ConfirmDialog } from "../../../shared/components/common/confirm-dialog";
import { useToggleDeliverableStatus } from "../../deliverables/hooks/use-toggle-deliverable-status";
import { useDeleteDeliverable } from "../../deliverables/hooks/use-delete-deliverable";
import { useUpdateDeliverable } from "../../deliverables/hooks/use-update-deliverable";
import { DeliverableTable } from "../../deliverables/components/DeliverableTable";
import { useDebounce } from "../../../shared/hooks/use-debounce";
import { useSoftDeleteDeliverable } from "../../deliverables/hooks/use-soft-delete-deliverable";

export default function AdminDeliverablesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [statusFilter, setStatusFilter] = useState< "All" | "Active" | "Inactive" >("All");
  const [sortBy, setSortBy] = useState<"createdAt" | "name">("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [openModal, setOpenModal] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deliverableToEdit, setDeliverableToEdit] =  useState<DeliverableResponseDTO | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deliverableToDelete, setDeliverableToDelete] = useState<DeliverableResponseDTO | null>(null);
  const [softDeleteOpen, setSoftDeleteOpen] = useState(false);

  const { mutateAsync: createDeliverable, isPending: isCreating } = useCreateDeliverable();
  const { mutateAsync: updateDeliverable, isPending: isUpdating } = useUpdateDeliverable();
  const { mutateAsync: toggleDeliverableStatus } = useToggleDeliverableStatus();
  const { mutateAsync: deleteDeliverable, isPending: isDeleting } = useDeleteDeliverable();
  const { mutateAsync: softDeleteDeliverable, isPending: isSoftDeleting } = useSoftDeleteDeliverable();

  const { data, isLoading } = useGetAllDeliverables({
    page,
    search: debouncedSearch || undefined,
    status:
      statusFilter === "All"
        ? undefined
        : statusFilter === "Active"
          ? "ACTIVE"
          : "INACTIVE",
    sortBy,
    sortOrder,
  });

  const deliverables = data?.data?.deliverables ?? [];

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleEdit = (deliverable: DeliverableResponseDTO) => {
    setDeliverableToEdit(deliverable);
    setEditOpen(true);
  };

  const handleToggleStatus = async (deliverable: DeliverableResponseDTO) => {
    try {
      await toggleDeliverableStatus(deliverable.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSoftDelete = (deliverable: DeliverableResponseDTO) => {
    setDeliverableToDelete(deliverable);
    setSoftDeleteOpen(true);
  };

  const handleDelete = (deliverable: DeliverableResponseDTO) => {
    setDeliverableToDelete(deliverable);
    setDeleteOpen(true);
  };

  const handleConfirmSoftDelete = async () => {
    if (!deliverableToDelete) return;
    await softDeleteDeliverable(deliverableToDelete.id);
    setSoftDeleteOpen(false);
    setDeliverableToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!deliverableToDelete) return;
    await deleteDeliverable(deliverableToDelete.id);
    setDeleteOpen(false);
    setDeliverableToDelete(null);
  };

  const handleCreateDeliverable = async (data: DeliverableFormValues) => {
    await createDeliverable(data);
  };

  const handleUpdateDeliverable = async (data: DeliverableFormValues) => {
    if (!deliverableToEdit) return;
    await updateDeliverable({
      deliverableId: deliverableToEdit.id,
      payload: data,
    });
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  };

  return (
    <div className="space-y-6">
      <DeliverableFormDialog
        open={openModal}
        onOpenChange={setOpenModal}
        mode="create"
        isLoading={isCreating}
        onSubmit={handleCreateDeliverable}
      />

      <DeliverableFormDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        mode="edit"
        isLoading={isUpdating}
        initialData={
          deliverableToEdit
            ? {
                icon: deliverableToEdit.icon,
                name: deliverableToEdit.name,
                description: deliverableToEdit.description,
              }
            : undefined
        }
        onSubmit={handleUpdateDeliverable}
      />
      <ConfirmDialog
        open={softDeleteOpen}
        onOpenChange={setSoftDeleteOpen}
        title="Archive Deliverable"
        description={`Archive ${deliverableToDelete?.name}?`}
        confirmText="Archive"
        onConfirm={handleConfirmSoftDelete}
      />

      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete Deliverable"
        description={`Permanently delete ${deliverableToDelete?.name}?`}
        confirmText="Delete"
        variant="destructive"
        onConfirm={handleConfirmDelete}
      />

      <PageHeader
        title="Deliverables"
        description="Manage furniture deliverables"
        action={
          <Button
            variant="copper"
            size="sm"
            className="gap-1"
            onClick={handleAdd}
          >
            <Plus size={14} />
            Add Deliverable
          </Button>
        }
      />

      <FilterSortDropdown
        search={search}
        searchPlaceholder="Search deliverables..."
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        filters={[
          {
            key: "status",
            label: "Status",
            value: statusFilter,
            options: [
              {
                label: "All",
                value: "All",
              },
              {
                label: "Active",
                value: "Active",
              },
              {
                label: "Inactive",
                value: "Inactive",
              },
            ],
            onChange: (value) => {
              setStatusFilter(
                (value as "All" | "Active" | "Inactive") || "All",
              );
              setPage(1);
            },
          },
        ]}
        sortOptions={[
          {
            key: "createdAt",
            label: "Newest First",
          },
          {
            key: "name",
            label: "Name",
          },
        ]}
        sortValue={sortBy}
        onSortChange={(value) => {
          setSortBy(value as "createdAt" | "name");
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
        <div className="py-20 text-center text-muted-foreground">
          Loading deliverables...
        </div>
      ) : deliverables.length === 0 ? (
        <EmptyState
          title="No Deliverables Found"
          description="No deliverables available."
        />
      ) : (
        <>
          <div className="overflow-x-auto">
            <DeliverableTable
              deliverables={deliverables}
              onEdit={handleEdit}
              onToggleStatus={handleToggleStatus}
              onSoftDelete={handleSoftDelete}
              onDelete={handleDelete}
            />
          </div>

          <PaginationControl
            currentPage={data?.data?.page ?? 1}
            totalPages={data?.data?.totalPages ?? 1}
            totalItems={data?.data?.total ?? 0}
            itemsPerPage={data?.data?.limit ?? 10}
            onPageChange={(page) => setPage(page)}
          />
        </>
      )}
    </div>
  );
}
