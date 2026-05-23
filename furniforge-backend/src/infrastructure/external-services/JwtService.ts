import jwt from "jsonwebtoken";
import { injectable } from "inversify";
import { env } from "../../infrastructure/config/env";
import type { ITokenService, TokenPayload, ResetTokenPayload} from "../../domain/services/ITokenService";
import { UnauthorizedError } from "../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../config/messages";
import { ERROR_CODES } from "../../shared/constants/errorCodes";

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
    try {
    return jwt.verify(token, env.JWT.ACCESS_SECRET) as TokenPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError(
        ERROR_MESSAGES.AUTH.TOKEN.ACCESS_TOKEN_EXPIRED,
        ERROR_CODES.AUTH.ACCESS_TOKEN_EXPIRED
      );
    }

    throw new UnauthorizedError(
      ERROR_MESSAGES.AUTH.TOKEN.INVALID_ACCESS_TOKEN,
      ERROR_CODES.AUTH.INVALID_ACCESS_TOKEN
    );
  }
  }

  verifyRefreshToken(token: string): TokenPayload {
    try {
      return jwt.verify(token, env.JWT.REFRESH_SECRET) as TokenPayload;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError(
        ERROR_MESSAGES.AUTH.TOKEN.REFRESH_TOKEN_EXPIRED,
        ERROR_CODES.AUTH.REFRESH_TOKEN_EXPIRED
      );
    }

    throw new UnauthorizedError(
      ERROR_MESSAGES.AUTH.TOKEN.INVALID_REFRESH_TOKEN,
      ERROR_CODES.AUTH.INVALID_REFRESH_TOKEN
    );
    }
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
    try {
      return jwt.verify(token, env.JWT.RESET_SECRET) as ResetTokenPayload;
    } catch {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.TOKEN.INVALID_RESET_TOKEN);
    }
  }
}
