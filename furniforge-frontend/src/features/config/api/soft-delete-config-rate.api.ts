import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ConfigRateCommandResponseDTO } from "../types/config-command.type";

export const softDeleteConfigRateApi = async ( configRateId: string ): Promise<ApiResponse<ConfigRateCommandResponseDTO>> => {
  const res = await httpClient.patch(API_ENDPOINTS.ADMIN.CONFIG_RATES.SOFT_DELETE(configRateId));

  return res.data;
};