import { Request, Response, NextFunction } from "express";
import { container } from "@infrastructure/di/container.js";
import { TYPES } from "@infrastructure/di/types.js";
import { ITokenService } from "@domain/services/ITokenService.js";
import { ISessionService } from "@domain/services/ISessionService.js";
import { UnauthorizedError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { UserRole } from "@domain/enums/UserRole.js";

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

export const authMiddleware = async (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      throw new UnauthorizedError("Missing access token");
    }

    const token = header.split(" ")[1];

    const payload = tokenService.verifyAccessToken(token);

    const session = await sessionService.get(payload.sessionId);

    if (!session) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_NOT_FOUND);
    }

    if (session.status !== "active") {
      throw new UnauthorizedError("Session invalid");
    } 

    if (!Object.values(UserRole).includes(payload.role)) {
      throw new UnauthorizedError("Invalid role");
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