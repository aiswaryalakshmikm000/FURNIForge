import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { MeResponseDTO } from "../../../types/auth/me";

export const meApi = async (): Promise<ApiResponse<MeResponseDTO>> => {
  const res = await httpClient.get(API_ENDPOINTS.AUTH.ME);
  return res.data;
};