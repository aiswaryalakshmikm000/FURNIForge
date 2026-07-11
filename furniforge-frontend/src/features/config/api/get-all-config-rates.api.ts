import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetAllConfigRatesRequestDTO, GetAllConfigRatesResponseDTO } from "../types/get-all-config-rates.type";

export const getAllConfigRatesApi = async ( params: GetAllConfigRatesRequestDTO ): Promise<ApiResponse<GetAllConfigRatesResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.CONFIG_RATES.GET_ALL_CONFIG_RATES, { params } );

  return res.data;
};