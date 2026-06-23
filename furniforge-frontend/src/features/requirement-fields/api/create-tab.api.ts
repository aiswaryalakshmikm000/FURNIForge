import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { CreateTabDTO, TabCommandResponseDTO } from "../types/tab-command.type";


export const createTabApi = async ( payload: CreateTabDTO ): Promise<ApiResponse<TabCommandResponseDTO>> => {
  const res = await httpClient.post( API_ENDPOINTS.ADMIN.TABS.CREATE, payload );
  
  return res.data;
};