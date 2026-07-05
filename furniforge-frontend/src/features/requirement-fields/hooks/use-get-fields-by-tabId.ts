import { useQuery } from "@tanstack/react-query";
import { getFieldsByTabIdApi } from "../api/get-fields-by-tabId.api";
import type { GetFieldsByTabIdRequestDTO } from "../types/field.type";

export const useGetFieldsByTabsId = ( query: GetFieldsByTabIdRequestDTO, enabled = true ) => {
  return useQuery({
    queryKey: ["admin-requirement-field-fields", query],
    
    queryFn: () => getFieldsByTabIdApi(query),
      enabled
  });
};
