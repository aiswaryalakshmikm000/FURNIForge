import { useQuery } from "@tanstack/react-query";
import { getAllDesignersApi } from "../api/get-all-designers.api";
import type { GetAllDesignersRequestDTO } from "../types/get-all-designers.type";

export const useGetAllDesigners = ( query: GetAllDesignersRequestDTO ) => {
  return useQuery({
    queryKey: ["admin-designers", query],
    
    queryFn: () => getAllDesignersApi(query),
    staleTime: 1000 * 60 * 5,
  });
};
