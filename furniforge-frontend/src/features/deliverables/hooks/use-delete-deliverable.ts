import { toast } from "sonner";
import { deleteDeliverableApi } from "../api/delete-deliverable.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteDeliverable = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (deliverableId: string) => deleteDeliverableApi(deliverableId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-deliverables"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-deliverables"],
      });
    },
  });
};