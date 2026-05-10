import { useMemo } from "react";
import type { Lead } from "../types/lead.type";

type Props = {
  leads: Lead[];
  search: string;
  statusFilter: string;
  typeFilter: string;
  sourceFilter: string;
  sortKey: "none" | "date";
};

export const useLeadsFilters = ({
  leads,
  search,
  statusFilter,
  typeFilter,
  sourceFilter,
  sortKey,
}: Props) => {
  return useMemo(() => {
    let list = leads.filter((l) => {
      const matchesSearch =
        search === "" ||
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || l.status === statusFilter;

      const matchesType =
        typeFilter === "All" || l.types.includes(typeFilter);

      const matchesSource =
        sourceFilter === "All" || l.source === sourceFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesSource
      );
    });

    if (sortKey === "date") {
      list = [...list].sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime(),
      );
    }

    return list;
  }, [
    leads,
    search,
    statusFilter,
    typeFilter,
    sourceFilter,
    sortKey,
  ]);
};