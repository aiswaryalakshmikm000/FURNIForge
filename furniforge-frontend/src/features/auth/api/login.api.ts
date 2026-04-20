import { httpClient } from "../../../core/api/http-client";
import type { LoginRequestDTO, LoginResponseDTO } from "../../../types/auth/login.type";

export const loginApi = async (data: LoginRequestDTO): Promise<LoginResponseDTO> => {
  const res = await httpClient.post("/login", data);
  return res.data;
};
