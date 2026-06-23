import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { softDeleteTabApi } from "../api/soft-delete-tab.api";

export const useSoftDeleteTab  = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ tabId }: {
      tabId: string;
    }) => softDeleteTabApi( tabId ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-tabs"],
      });
    },
  });
};