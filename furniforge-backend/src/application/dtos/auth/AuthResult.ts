import { AuthResponseDTO } from "./AuthResponseDTO.js";

export type AuthResult = AuthResponseDTO & {
  refreshToken: string;
};