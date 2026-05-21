import { useQuery } from "@tanstack/react-query";
import { getAllLeadsApi } from "../api/get-all-leads.api";
import type { GetAllLeadsQueryDTO } from "../types/get-all-leads.type";

export const useGetAllLeads = ( query: GetAllLeadsQueryDTO ) => {
    return useQuery({
        queryKey: ["admin-leads", query],
        queryFn: () => getAllLeadsApi(query),
        staleTime: 1000 * 60 * 5,
    });
};