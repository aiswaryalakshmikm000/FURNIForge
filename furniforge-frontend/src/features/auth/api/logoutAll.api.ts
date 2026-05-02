import type { ApiResponse } from "../../../types/api/api-response.type";
import { httpClient } from "../../../core/api/http-client";
import { API_ENDPOINTS } from "../../../core/api/endpoints";

export const logoutAllApi = async (): Promise<ApiResponse<null>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.LOGOUT_ALL);
  return res.data;
};