import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ResendForgotPasswordOtpRequestDTO } from "../types/forgot-password.type";
import type { ResendOtpResponseDTO } from "../types/resend-otp.type";


export const resendForgotPasswordOtpApi = async (data: ResendForgotPasswordOtpRequestDTO): Promise<ApiResponse<ResendOtpResponseDTO>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.RESEND_FORGOT_PASSWORD, data);

  return res.data;
};