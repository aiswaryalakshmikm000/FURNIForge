import { useQuery } from "@tanstack/react-query";
import { getTemplateByDeliverableIdApi } from "../api/get-templates-by-deliverableId.api";
import type { GetTemplatesByDeliverableIdRequestDTO } from "../types/template.type";

export const useGetTemplatesByDeliverableId = ( query: GetTemplatesByDeliverableIdRequestDTO, enabled = true ) => {
  return useQuery({
    queryKey: ["admin-requirement-field-templates", query],
    
    queryFn: () => getTemplateByDeliverableIdApi(query),
    //   staleTime: 1000 * 60 * 5, 
      enabled
  });
};
