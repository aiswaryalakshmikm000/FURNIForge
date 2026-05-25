import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createLeadApi } from "../api/create-lead.api";

export const useCreateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLeadApi,

    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-leads"],
      });
    },
  });
};