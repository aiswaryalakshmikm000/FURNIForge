import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ConfigRateCommandResponseDTO } from "../types/config-command.type";
import { softDeleteConfigRateApi } from "../api/soft-delete-config-rate.api";

export const useSoftDeleteConfigRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ configRateId }: { configRateId: string }) => softDeleteConfigRateApi(configRateId),

    onSuccess: (response: ApiResponse<ConfigRateCommandResponseDTO>) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin-config-rates"],
      });
    },
  });
};