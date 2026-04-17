import { RefreshTokenResultDTO } from "../../../dtos/auth/RefreshTokenResultDTO.js";

export interface IRefreshTokenUseCase {
  execute(refreshToken: string): Promise<RefreshTokenResultDTO>;
}