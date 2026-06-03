import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { VerifyResetOtpRequestDTO, VerifyResetOtpResponseDTO } from "../types/forgot-password.type";


export const verifyResetOtpApi = async ( data: VerifyResetOtpRequestDTO ): Promise<ApiResponse<VerifyResetOtpResponseDTO>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.VERIFY_RESET_OTP, data);
  
  return res.data;
};