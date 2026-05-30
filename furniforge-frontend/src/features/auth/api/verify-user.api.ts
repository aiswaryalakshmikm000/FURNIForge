import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { VerifyEmailRequestDTO, VerifyEmailResponseDTO } from "../../../types/auth/verify-email.type";

export const verifyUserApi = async (data: VerifyEmailRequestDTO): Promise<ApiResponse<VerifyEmailResponseDTO>>  => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, data); 
  return res.data
};