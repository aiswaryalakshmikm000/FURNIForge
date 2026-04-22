import { httpClient } from "../../../core/api/http-client";
import type { VerifyOtpRequestDTO, VerifyOtpResponseDTO } from "../../../types/auth/verify-otp.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const verifyOtpApi = async (data: VerifyOtpRequestDTO): Promise<ApiResponse<VerifyOtpResponseDTO>> => {
    const res = await httpClient.post("/verify-otp", data)
    console.log(res)
    return res.data
}
