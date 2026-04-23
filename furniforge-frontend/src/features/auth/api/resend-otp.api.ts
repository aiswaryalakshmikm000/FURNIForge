import { httpClient } from "../../../core/api/http-client"
import type { ApiResponse } from "../../../types/api/api-response.type";
import type{ ResendOtpRequestDTO, ResendOtpResponseDTO } from "../../../types/auth/resend-otp.type";

export const resendOTPApi = async (data: ResendOtpRequestDTO ): Promise<ApiResponse<ResendOtpResponseDTO>> => {
    const res = await httpClient.post("/resend-otp", data);
    return res.data
}
