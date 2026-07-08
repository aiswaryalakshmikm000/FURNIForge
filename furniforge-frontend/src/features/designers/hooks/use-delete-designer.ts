import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDesignerApi } from "../api/delete-designer.api";

export const useDeleteDesigner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (designerId: string) => deleteDesignerApi(designerId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-designers"],
      });

      queryClient.invalidateQueries({
        queryKey: ["designer-options"],
      });
    },
  });
};
