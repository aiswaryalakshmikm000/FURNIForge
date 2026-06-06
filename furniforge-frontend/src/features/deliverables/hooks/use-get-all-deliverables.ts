import { useQuery } from "@tanstack/react-query";
import type { GetAllDeliverablesRequestDTO } from "../types/get-all-deliverables.type";
import { getAllDeliverablesApi } from "../api/get-all-deliverables.api";

export const useGetAllDeliverables = ( query: GetAllDeliverablesRequestDTO ) => {
  return useQuery({
    queryKey: ["admin-deliverables", query],
    
    queryFn: () => getAllDeliverablesApi(query),
    staleTime: 1000 * 60 * 5,
  });
};
