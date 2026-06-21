import type { UserResponseDTO } from "../../../dtos/user/UserResponseDTO";

export interface IGetMeUseCase {
  execute(userId: string): Promise<{ user: UserResponseDTO }>; 
}