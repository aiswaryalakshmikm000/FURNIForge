import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignDesignerApi } from "../api/assign-designer.api";
import { toast } from "sonner";

export const useAssignDesigner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ leadId, designerId }: {
      leadId: string;
      designerId: string;
    }) => {

      return assignDesignerApi(leadId, { designerId });
    },

    onSuccess: (response) => {

      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-leads"],
      });
    },
  });
};
