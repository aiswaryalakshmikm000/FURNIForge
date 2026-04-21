import { httpClient } from "../../../core/api/http-client";
import type { RegisterRequestDTO, RegisterResponseDTO } from "../../../types/auth/register.type";

export const registerApi = async (data: RegisterRequestDTO): Promise<RegisterResponseDTO> => {
  const res = await httpClient.post("/register", data);
  
  console.log(res)
  return res.data;
};

