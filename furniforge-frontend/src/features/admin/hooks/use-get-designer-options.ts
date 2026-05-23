import { useQuery } from "@tanstack/react-query";
import { getDesignerOptionsApi } from "../api/get-designer-options.api";

export const useGetAllDesignerOptions = () => {
  return useQuery({
    queryKey: ["designer-options"],
    queryFn: getDesignerOptionsApi,
    staleTime: 1000 * 60 * 10,
  });
};