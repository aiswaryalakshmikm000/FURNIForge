import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createConfigRateApi } from "../api/create-config-rate.api";
import type { ConfigRateCommandResponseDTO } from "../types/config-command.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const useCreateConfigRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createConfigRateApi,

    onSuccess: (response:ApiResponse<ConfigRateCommandResponseDTO>) => {
      toast.success( response.message );

      queryClient.invalidateQueries({
        queryKey: ["admin-config-rates"],
      });
    },
  });
};