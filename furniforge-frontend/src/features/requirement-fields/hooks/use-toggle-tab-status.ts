import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { toggleTabStatusApi } from "../api/toggle-tab-status.api";

export const useToggleTabStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tabId: string) => toggleTabStatusApi(tabId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-tabs"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin-requirement-field-fields"],
      });
    },
  });
};