import type { ApiResponse } from "../../../types/api/api-response.type";
import type { LoginResponseDTO } from "../../../types/auth/login.type";

export const mapLoginResponse = (api: ApiResponse<LoginResponseDTO>): LoginResponseDTO => {
  const {user, accessToken} = api.data;

  return {
    accessToken: accessToken,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
    message: api.message,
  };
};