import { httpClient } from "../../../core/api/http-client";
import type { RegisterRequestDTO, RegisterResponseDTO } from "../../../types/auth/register.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const registerApi = async (data: RegisterRequestDTO): Promise<ApiResponse<RegisterResponseDTO>> => {
  const res = await httpClient.post("/register", data);
  
  return res.data;
};

