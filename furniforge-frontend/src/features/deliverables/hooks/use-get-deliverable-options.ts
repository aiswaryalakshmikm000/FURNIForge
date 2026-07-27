import { useQuery } from "@tanstack/react-query";
import { getDeliverableOptionsApi } from "../api/get-deliverable-options.api";


export const useGetDeliverableOptions = () => {
 return useQuery({
    queryKey:["deliverable-options"],
    queryFn:getDeliverableOptionsApi,
    staleTime: 1000 * 60 * 10,
 });

};
