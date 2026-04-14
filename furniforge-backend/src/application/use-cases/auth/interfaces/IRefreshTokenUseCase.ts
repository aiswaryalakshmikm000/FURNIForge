import { RefreshTokenResultDTO } from "@application/dtos/auth/RefreshTokenResultDTO.js";

export default interface IRefreshTokenUseCase {
  execute(refreshToken: string): Promise<RefreshTokenResultDTO>;
}