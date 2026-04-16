import { UserRole } from "@domain/enums/UserRole.js";

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  sessionId: string;
}

export interface ITokenService {
  generateAccessToken(payload: TokenPayload): string;
  generateRefreshToken(payload: TokenPayload): string;
  verifyAccessToken(token: string): TokenPayload;
  verifyRefreshToken(token: string): TokenPayload;
}