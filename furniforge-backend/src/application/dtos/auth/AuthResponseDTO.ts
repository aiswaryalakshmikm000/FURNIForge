import { UserResponseDTO } from "../user/UserResponseDTO";

export type AuthResponseDTO = {
  user: UserResponseDTO;
  accessToken: string;
};
