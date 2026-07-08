import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { softDeleteDeliverableApi } from "../api/soft-delete-deliverable.api";

export const useSoftDeleteDeliverable = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (deliverableId: string) =>
      softDeleteDeliverableApi(deliverableId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-deliverables"],
      });
      
      
    },
  });
};