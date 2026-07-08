import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateLeadApi } from "../api/update-lead.api";
import type { UpdateLeadDTO } from "../types/lead-form.type";

export const useUpdateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ leadId, payload }: {
      leadId: string;
      payload: UpdateLeadDTO;
    }) => updateLeadApi( leadId, payload ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-leads"],
      });
    },
  });
};