import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TabCommandResponseDTO, UpdateTabDTO } from "../types/tab-command.type";
import { updateTabApi } from "../api/update-tab.api";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const useUpdateTab = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ tabId, payload }: { tabId: string, payload: UpdateTabDTO }) => updateTabApi( tabId, payload ),

    onSuccess: (response: ApiResponse<TabCommandResponseDTO>) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-tabs"],
      });
    },
  });
};