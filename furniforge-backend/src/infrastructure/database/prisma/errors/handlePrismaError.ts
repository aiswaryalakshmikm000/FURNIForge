import { Prisma } from "../../../../generated/prisma/index";
import { AppError, ConflictError, InternalServerError, NotFoundError} from "../../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../config/messages";

export function handlePrismaError(error: unknown): never {
  if (error instanceof AppError) {
    throw error;
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {

      case "P2002":
        const target = error.meta?.target;

        if (Array.isArray(target)) {
          if (target.includes("email")) {
            throw new ConflictError(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_EXISTS);
          }

          if (target.includes("phone")) {
            throw new ConflictError(ERROR_MESSAGES.AUTH.PHONE_ALREADY_EXISTS);
          }
        }

        throw new ConflictError(ERROR_MESSAGES.GENERAL.CONFLICT);

      case "P2025":
        throw new NotFoundError(ERROR_MESSAGES.GENERAL.NOT_FOUND);

      default:
        throw new InternalServerError(
          ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR,
        );
    }
  }

  throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
}
