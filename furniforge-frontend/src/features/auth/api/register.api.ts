import { httpClient } from "../../../core/api/http-client";
import type { RegisterRequestDTO, RegisterResponseDTO } from "../../../types/auth/register.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { API_ENDPOINTS } from "../../../core/api/endpoints";

export const registerApi = async (data: RegisterRequestDTO): Promise<ApiResponse<RegisterResponseDTO>> => {
  const res = await httpClient.post(API_ENDPOINTS.AUTH.REGISTER, data);
  
  return res.data;
};

