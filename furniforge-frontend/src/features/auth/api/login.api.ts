import { httpClient } from "../../../core/api/http-client";
import type { LoginRequestDTO, LoginResponseDTO } from "../../../types/auth/login.type";

export const loginApi = async (data: LoginRequestDTO): Promise<LoginResponseDTO> => {
  const res = await httpClient.post("/login", data);
  console.log(res)
  const api = res.data
  let user =  api.data.user;

  return {
    accessToken: api.data.accessToken,
    user: {
      id: user.id,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      role: user.role,
    },
    message: res.data.message
  }
};
