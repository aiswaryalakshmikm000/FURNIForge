import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ForgotPasswordRequestDTO, ForgotPasswordResponseDTO } from "../types/forgot-password.type";

export const forgotPasswordApi = async (data: ForgotPasswordRequestDTO): Promise<ApiResponse<ForgotPasswordResponseDTO>> => {
    const res = await httpClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data)

    return res.data
}