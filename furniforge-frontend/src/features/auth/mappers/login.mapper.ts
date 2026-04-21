import type { LoginResponseDTO } from "../../../types/auth/login.type";

export const mapLoginResponse = (api: any): LoginResponseDTO => {
  const user = api.data.user;

  return {
    accessToken: api.data.accessToken,
    user: {
      id: user.id,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      role: user.role,
    },
    message: api.message,
  };
};