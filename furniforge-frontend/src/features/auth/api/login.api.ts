import { httpClient } from "../../../core/api/http-client";
import type { LoginRequestDTO, LoginResponseDTO } from "../../../types/auth/login.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const loginApi = async (data: LoginRequestDTO): Promise<ApiResponse<LoginResponseDTO>> => {
  const res = await httpClient.post("/login", data);
  
  return res.data
};
