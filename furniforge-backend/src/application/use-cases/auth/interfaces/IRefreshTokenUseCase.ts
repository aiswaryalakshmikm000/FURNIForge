import { RefreshTokenResultDTO } from "@application/dtos/auth/RefreshTokenResultDTO.js";

export interface IRefreshTokenUseCase {
  execute(refreshToken: string): Promise<RefreshTokenResultDTO>;
}