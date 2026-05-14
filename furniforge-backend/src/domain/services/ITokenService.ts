import { UserRole } from "../../domain/enums/UserRole";

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  sessionId: string;
}

export interface ResetTokenPayload {
  userId: string
}

export interface ITokenService {
  generateAccessToken(payload: TokenPayload): string;
  generateRefreshToken(payload: TokenPayload): string;
  verifyAccessToken(token: string): TokenPayload;
  verifyRefreshToken(token: string): TokenPayload;

  generateResetToken(payload: ResetTokenPayload): string;
  verifyResetToken(token: string): ResetTokenPayload;
}