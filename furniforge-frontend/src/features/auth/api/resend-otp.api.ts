import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client"
import type { ApiResponse } from "../../../types/api/api-response.type";
import type{ ResendOtpRequestDTO, ResendOtpResponseDTO } from "../types/resend-otp.type";

export const resendOTPApi = async (data: ResendOtpRequestDTO ): Promise<ApiResponse<ResendOtpResponseDTO>> => {
    const res = await httpClient.post(API_ENDPOINTS.AUTH.RESEND_OTP, data);
    return res.data
}
