import { Request, Response, NextFunction } from "express";
import { UnauthorizedError, ForbiddenError} from "@domain/errors/AppError.js";
import { AuthRequest } from "./authMiddleware.js";
import { UserRole } from "@domain/enums/UserRole.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export const authorizeRoles = (...allowedRoles: UserRole[]) => {
  return (req: AuthRequest, _res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) {
        throw new UnauthorizedError();
      }

      if (!allowedRoles.includes(user.role as UserRole)) {
        throw new ForbiddenError();
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};