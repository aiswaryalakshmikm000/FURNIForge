import { useQuery } from "@tanstack/react-query";
import { getTabsByTemplateIdApi } from "../api/get-tabs-by-templateId.api";
import type { GetTabsByTemplateIdRequestDTO } from "../types/tab.type";

export const useGetTabsByTemplateId = ( query: GetTabsByTemplateIdRequestDTO ) => {
  return useQuery({
    queryKey: ["admin-requirement-field-tabs", query],
    
    queryFn: () => getTabsByTemplateIdApi(query),
      staleTime: 1000 * 60 * 5,
  });
};
