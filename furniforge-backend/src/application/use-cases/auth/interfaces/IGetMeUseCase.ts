import { UserResponseDTO } from "../../../dtos/user/userResponseDTO.js";

export interface IGetMeUseCase {
  execute(userId: string): Promise<{ user: UserResponseDTO }>; 
}