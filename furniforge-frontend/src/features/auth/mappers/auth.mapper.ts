import type { LoginResponseDTO } from "../../../types/auth/login.type";
import type { User } from "../../../types/auth/user.types";

export const mapLoginResponseToUser = (
  dto: LoginResponseDTO
): User => {
  return {
    id: dto.user.id,
    email: dto.user.email,
    name: dto.user.name,
    role: dto.user.role,
  };
};