import type { AuthResponseDTO } from "./AuthResponseDTO";

export type AuthResult = AuthResponseDTO & {
  refreshToken: string;
};
