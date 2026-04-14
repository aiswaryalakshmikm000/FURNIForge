import { UserResponseDTO } from "../user/userResponseDTO.js";

export type AuthResponseDTO = {
  user: UserResponseDTO;
  accessToken: string;
};