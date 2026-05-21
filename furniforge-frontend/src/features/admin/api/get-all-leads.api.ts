import { httpClient } from "../../../core/api/http-client";
import { API_ENDPOINTS } from "../../../core/api/endpoints";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetAllLeadsQueryDTO, GetAllLeadsResponseDTO } from "../types/get-all-leads.type";

export const getAllLeadsApi = async ( params: GetAllLeadsQueryDTO ): Promise<ApiResponse<GetAllLeadsResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.LEADS.GET_ALL, { params } );

  return res.data;
};