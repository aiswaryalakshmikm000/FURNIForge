import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleDeliverableStatusApi } from "../api/toggle-deliverable-status.api";
import { toast } from "sonner";

export const useToggleDeliverableStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (deliverableId: string) => toggleDeliverableStatusApi(deliverableId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-deliverables"],
      });
    },
  });
};
