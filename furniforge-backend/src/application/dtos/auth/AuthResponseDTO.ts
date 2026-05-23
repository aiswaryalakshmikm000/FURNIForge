import { UserResponseDTO } from "../user/userResponseDTO";

export type AuthResponseDTO = {
  user: UserResponseDTO;
  accessToken: string;
};