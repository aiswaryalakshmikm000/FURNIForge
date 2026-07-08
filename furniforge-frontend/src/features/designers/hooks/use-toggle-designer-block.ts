import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleDesignerBlockApi } from "../api/toggle-designer-block.api";
import { toast } from "sonner";

export const useToggleDesignerBlock = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (designerId: string) => toggleDesignerBlockApi(designerId),

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
