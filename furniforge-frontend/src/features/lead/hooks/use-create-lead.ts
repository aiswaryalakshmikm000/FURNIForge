import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createLeadApi } from "../api/create-lead.api";
import type { CreateLeadDTO } from "../types/lead-form.type";

export const useCreateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateLeadDTO) => createLeadApi(payload),

    onSuccess: (res) => {

      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-leads"],
      });
    },
  });
};