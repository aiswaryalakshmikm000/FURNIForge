import type { UserResponseDTO } from "../../../dtos/user/userResponseDTO";

export interface IGetMeUseCase {
  execute(userId: string): Promise<{ user: UserResponseDTO }>; 
}