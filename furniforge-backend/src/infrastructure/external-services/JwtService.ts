import jwt from "jsonwebtoken";
import { injectable } from "inversify";
import { env } from "../../infrastructure/config/env.js";
import { ITokenService, TokenPayload } from "../../domain/services/ITokenService.js";


@injectable()
export class JwtService implements ITokenService {

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
}