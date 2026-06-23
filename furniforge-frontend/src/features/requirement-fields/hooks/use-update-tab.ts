import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UpdateTabDTO } from "../types/tab-command.type";
import { updateTabApi } from "../api/update-tab.api";
import { toast } from "sonner";

export const useUpdateTab = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ tabId, payload }: {
      tabId: string;
      payload: UpdateTabDTO;
    }) => updateTabApi( tabId, payload ),

    onSuccess: (response) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-tabs"],
      });
    },
  });
};