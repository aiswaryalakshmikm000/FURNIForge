import { useQuery } from "@tanstack/react-query";
import type { GetAllConfigRatesRequestDTO } from "../types/get-all-config-rates.type";
import { getAllConfigRatesApi } from "../api/get-all-config-rates.api";

export const useGetAllConfigRates = ( query: GetAllConfigRatesRequestDTO ) => {
  return useQuery({
    queryKey: ["admin-config-rates", query],
    
    queryFn: () => getAllConfigRatesApi(query),
    staleTime: 1000 * 60 * 5,
  });
};
