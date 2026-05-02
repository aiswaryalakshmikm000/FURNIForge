import { httpClient } from "../../../core/api/http-client";
import type { VerifyOtpRequestDTO, VerifyOtpResponseDTO } from "../../../types/auth/verify-otp.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { API_ENDPOINTS } from "../../../core/api/endpoints";

export const verifyOtpApi = async (data: VerifyOtpRequestDTO): Promise<ApiResponse<VerifyOtpResponseDTO>> => {
    const res = await httpClient.post(API_ENDPOINTS.AUTH.VERIFY_OTP, data)
    console.log(res)
    return res.data
}
