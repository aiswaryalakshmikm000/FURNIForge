import jwt from "jsonwebtoken";
import { injectable } from "inversify";
import { env } from "../../infrastructure/config/env.js";
import {ITokenService, TokenPayload, ResetTokenPayload} from "../../domain/services/ITokenService.js";

@injectable()
export class JwtService implements ITokenService {
  /**
   * genration and verification of jwt tokens regarding register verify and login
   */

  generateAccessToken(payload: TokenPayload): string {
    return jwt.sign(payload, env.JWT.ACCESS_SECRET, {
      expiresIn: env.JWT.ACCESS_EXPIRY as jwt.SignOptions["expiresIn"],
    });
  }

  generateRefreshToken(payload: TokenPayload): string {
    return jwt.sign(payload, env.JWT.REFRESH_SECRET, {
      expiresIn: env.JWT.REFRESH_EXPIRY as jwt.SignOptions["expiresIn"],
    });
  }

  verifyAccessToken(token: string): TokenPayload {
    return jwt.verify(token, env.JWT.ACCESS_SECRET) as TokenPayload;
  }

  verifyRefreshToken(token: string): TokenPayload {
    return jwt.verify(token, env.JWT.REFRESH_SECRET) as TokenPayload;
  }

  /**
   * generate and verify reset tokens regarding the reset password
   */

  generateResetToken(payload: ResetTokenPayload): string {
    return jwt.sign(payload, env.JWT.RESET_SECRET, {
      expiresIn: env.JWT.RESET_EXPIRY as jwt.SignOptions["expiresIn"],
    });
  }

  verifyResetToken(token: string): ResetTokenPayload {
    return jwt.verify(token, env.JWT.RESET_SECRET) as ResetTokenPayload;
  }
}
