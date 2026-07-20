import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { toggleConfigRateStatusApi } from "../api/toggle-config-rate-status.api";

export const useToggleConfigRateStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (configRateId: string) => toggleConfigRateStatusApi(configRateId),

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-config-rates"],
      });
    },
  });
};
