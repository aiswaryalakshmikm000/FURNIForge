import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ResetPasswordRequestDTO } from "../types/forgot-password.type";

export const resetPasswordApi = async (data: ResetPasswordRequestDTO): Promise<ApiResponse<null>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, data);

  return res.data
};