import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createDeliverableApi } from "../api/create-deliverable.api";

export const useCreateDeliverable = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDeliverableApi,

    onSuccess: (response) => {
      toast.success( response.message );

      queryClient.invalidateQueries({
        queryKey: ["admin-deliverables"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-deliverables"],
      });
    },
  });
};