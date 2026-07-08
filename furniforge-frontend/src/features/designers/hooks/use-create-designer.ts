import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createDesignerApi } from "../api/create-designer.api";

export const useCreateDesigner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDesignerApi,

    onSuccess: (response) => {
      toast.success( response.message );

      queryClient.invalidateQueries({
        queryKey: ["admin-designers"],
      });
    },
  });
};