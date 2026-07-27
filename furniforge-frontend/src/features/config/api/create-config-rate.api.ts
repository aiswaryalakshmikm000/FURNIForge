import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ConfigRateCommandDTO, ConfigRateCommandResponseDTO } from "../types/config-command.type";

export const createConfigRateApi = async ( payload: ConfigRateCommandDTO ): Promise<ApiResponse<ConfigRateCommandResponseDTO>> => {
  const res = await httpClient.post( API_ENDPOINTS.ADMIN.CONFIG_RATES.CREATE, payload );

  return res.data;
};