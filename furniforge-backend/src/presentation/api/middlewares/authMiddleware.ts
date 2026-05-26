import { Request, Response, NextFunction } from "express";
import { container } from "../../../infrastructure/di/container";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITokenService } from "../../../domain/services/ITokenService";
import type { ISessionService } from "../../../domain/services/ISessionService";
import { ForbiddenError, UnauthorizedError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { UserRole } from "../../../domain/enums/UserRole";
import { ERROR_CODES } from "../../../shared/constants/errorCodes";

const tokenService = container.get<ITokenService>(TYPES.ITokenService);
const sessionService = container.get<ISessionService>(TYPES.ISessionService);

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
    role: UserRole;
    sessionId: string;
  };
}

export const authMiddleware = async ( req: AuthRequest, _res: Response, next: NextFunction ) => {
 
  try {
    const token = req.cookies?.accessToken;
    
    if(!token) throw new UnauthorizedError(ERROR_MESSAGES.AUTH.TOKEN.ACCESS_TOKEN_MISSING, ERROR_CODES.AUTH.ACCESS_TOKEN_MISSING)

    const payload = tokenService.verifyAccessToken(token);

    const session = await sessionService.get(payload.sessionId);

    if (!session) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_EXPIRED, ERROR_CODES.AUTH.SESSION_EXPIRED);
    }

    if (session.status !== "active") {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_INVALID, ERROR_CODES.AUTH.SESSION_INVALID);
    } 

    if (!Object.values(UserRole).includes(payload.role)) {
      throw new ForbiddenError(ERROR_MESSAGES.AUTH.INVALID_ROLE);
    }

    req.user = {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
      sessionId: payload.sessionId,
    };

    next();
  } catch (error) {
    next(error);
  }
};