import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { UpdateDesignerDTO } from "../types/designer-form.type";
import { updateDesignerApi } from "../api/update-designer.api";

export const useUpdateDesigner = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ designerId, payload }: {
      designerId: string;
      payload: UpdateDesignerDTO;
    }) => updateDesignerApi( designerId, payload ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-designers"],
      });
    },
  });
};