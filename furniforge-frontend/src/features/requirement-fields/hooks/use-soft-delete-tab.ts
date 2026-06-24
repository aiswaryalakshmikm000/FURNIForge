import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { softDeleteTabApi } from "../api/soft-delete-tab.api";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { TabCommandResponseDTO } from "../types/tab-command.type";

export const useSoftDeleteTab  = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: ({ tabId }: {
      tabId: string;
    }) => softDeleteTabApi( tabId ),

    onSuccess: (response:ApiResponse<TabCommandResponseDTO>) => {

      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-tabs"],
      });
    },
  });
};