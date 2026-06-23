import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTabApi } from "../api/create-tab.api";
import { toast } from "sonner";

export const useCreateTab = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTabApi,

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-tabs"],
      });
    },
  });
};