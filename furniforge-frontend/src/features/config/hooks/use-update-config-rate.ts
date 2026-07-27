import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ConfigRateCommandResponseDTO, UpdateConfigRateDTO } from "../types/config-command.type";
import { updateConfigRateApi } from "../api/update-config-rate.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateConfigRate = () => {

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ configRateId, payload }: 
            { configRateId: string, payload: UpdateConfigRateDTO }) => updateConfigRateApi(configRateId, payload),

        onSuccess(response: ApiResponse<ConfigRateCommandResponseDTO>) {

            toast.success(response.message);
            queryClient.invalidateQueries({
                queryKey: ["admin-config-rates"],
            });

        },

    });

};