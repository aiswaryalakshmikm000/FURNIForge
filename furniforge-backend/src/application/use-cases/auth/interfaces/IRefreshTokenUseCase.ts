import type { RefreshTokenResultDTO } from "../../../dtos/auth/RefreshTokenResultDTO";

export interface IRefreshTokenUseCase {
  execute(refreshToken: string): Promise<RefreshTokenResultDTO>;
}
