import { useQuery } from "@tanstack/react-query";
import { getRequirementFieldDeliverablesApi } from "../api/get-requirement-field-deliverables.api";
import type { GetRequirementFieldDeliverablesRequestDTO } from "../types/deliverable.type";

export const useGetRequirementFieldDeliverables = ( query: GetRequirementFieldDeliverablesRequestDTO ) => {
  return useQuery({
    queryKey: ["admin-requirement-field-deliverables", query],
    
    queryFn: () => getRequirementFieldDeliverablesApi(query),
      staleTime: 1000 * 60 * 5,
  });
};
