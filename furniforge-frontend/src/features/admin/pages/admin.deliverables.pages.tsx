import { useState } from "react";

import { PageHeader } from "../../../shared/components/common/page-header";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";

import { DeliverableCard } from "../../deliverables/components/DeliverableCard";

import type { GetAllDeliverablesRequestDTO } from "../../deliverables/types/get-all-deliverables.type";

import { useGetAllDeliverables } from "../../deliverables/hooks/use-get-all-deliverables";

export default function AdminDeliverablesPage() {
  const [queryParams, setQueryParams] = useState<GetAllDeliverablesRequestDTO>({
    page: 1,
    search: "",
    status: undefined,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  const { data, isLoading } = useGetAllDeliverables(queryParams);

  const deliverables = data?.data?.deliverables ?? [];

  const resetFilters = () => {
    setQueryParams({
      page: 1,
      search: "",
      status: undefined,
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Deliverables"
        description="Manage furniture deliverables"
      />

      <FilterSortDropdown
        search={queryParams.search ?? ""}
        searchPlaceholder="Search deliverables..."
        onSearchChange={(value) =>
          setQueryParams((prev) => ({
            ...prev,
            page: 1,
            search: value,
          }))
        }
        filters={[
          {
            key: "status",
            label: "Status",
            value:
              queryParams.status === undefined
                ? "All"
                : queryParams.status === "ACTIVE"
                  ? "Active"
                  : "Inactive",

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

            onChange: (value) =>
              setQueryParams((prev) => ({
                ...prev,
                page: 1,
                status:
                  value === "All"
                    ? undefined
                    : value === "Active"
                      ? "ACTIVE"
                      : "INACTIVE",
              })),
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
        sortValue={queryParams.sortBy ?? "createdAt"}
        onSortChange={(value) =>
          setQueryParams((prev) => ({
            ...prev,
            page: 1,
            sortBy: value as "name" | "createdAt",
          }))
        }
        sortOrder={queryParams.sortOrder ?? "desc"}
        onSortOrderChange={(value) =>
          setQueryParams((prev) => ({
            ...prev,
            page: 1,
            sortOrder: value,
          }))
        }
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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {deliverables.map((deliverable) => (
              <DeliverableCard key={deliverable.id} deliverable={deliverable} />
            ))}
          </div>

          <PaginationControl
            currentPage={data?.data?.page ?? 1}
            totalPages={data?.data?.totalPages ?? 1}
            totalItems={data?.data?.total ?? 0}
            itemsPerPage={data?.data?.limit ?? 10}
            onPageChange={(page) =>
              setQueryParams((prev) => ({
                ...prev,
                page,
              }))
            }
          />
        </>
      )}
    </div>
  );
}
