import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { DeliverableCommandDTO } from "../types/deliverable-command.type";
import { updateDeliverableApi } from "../api/update-deliverable.api";
import { toast } from "sonner";

export const useUpdateDeliverable = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ deliverableId, payload }: {
      deliverableId: string;
      payload: DeliverableCommandDTO;
    }) => updateDeliverableApi( deliverableId, payload ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-deliverables"],
      });
    },
  });
};