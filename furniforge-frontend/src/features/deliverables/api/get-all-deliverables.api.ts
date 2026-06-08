import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetAllDeliverablesRequestDTO, GetAllDeliverablesResponseDTO } from "../types/get-all-deliverables.type";

export const getAllDeliverablesApi = async ( params: GetAllDeliverablesRequestDTO ): Promise<ApiResponse<GetAllDeliverablesResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.DELIVERABLES.GET_ALL, { params } );

  return res.data;
};