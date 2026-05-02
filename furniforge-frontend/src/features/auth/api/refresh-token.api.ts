import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const refreshTokenApi = async (): Promise<ApiResponse<null>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.REFRESH);
  
  return res.data;
};