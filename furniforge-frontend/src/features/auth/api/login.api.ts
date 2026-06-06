import { httpClient } from "../../../core/api/http-client";
import type { LoginRequestDTO, LoginResponseDTO } from "../types/login.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { API_ENDPOINTS } from "../../../core/api/endpoints";

export const loginApi = async (data: LoginRequestDTO): Promise<ApiResponse<LoginResponseDTO>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.LOGIN, data);
  
  return res.data
};
