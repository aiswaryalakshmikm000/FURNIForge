import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetAllDesignersRequestDTO, GetAllDesignersResponseDTO } from "../types/get-all-designers.type";

export const getAllDesignersApi = async ( params: GetAllDesignersRequestDTO ): Promise<ApiResponse<GetAllDesignersResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.DESIGNERS.GET_ALL, { params } );

  return res.data;
};