import { useMemo, useState } from "react";

export const usePagination = <T>(
  items: T[],
  itemsPerPage: number = 6
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = items.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;

    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    paginatedItems,
  };
};