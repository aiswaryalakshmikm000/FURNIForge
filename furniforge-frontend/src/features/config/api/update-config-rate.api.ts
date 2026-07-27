import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ConfigRateCommandResponseDTO, UpdateConfigRateDTO } from "../types/config-command.type";

export const updateConfigRateApi = async ( configRateId: string, payload: UpdateConfigRateDTO ): Promise<ApiResponse<ConfigRateCommandResponseDTO>> => {
    const res = await httpClient.put( API_ENDPOINTS.ADMIN.CONFIG_RATES.UPDATE(configRateId), payload );

    return res.data;
};