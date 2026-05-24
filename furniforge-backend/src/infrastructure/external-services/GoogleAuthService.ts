import { OAuth2Client } from "google-auth-library";
import { GoogleProfile, IGoogleAuthService } from "../../domain/services/IGoogleAuthService";
import { env } from "../config/env";
import { injectable } from "inversify";
import { ERROR_MESSAGES } from "../config/messages";
import { UnauthorizedError } from "../../domain/errors/AppError";
import { ERROR_CODES } from "../../shared/constants/errorCodes";

@injectable()
export class GoogleAuthService implements IGoogleAuthService {
  private client = new OAuth2Client(env.GOOGLE_CLIENT_ID);

  async verifyToken(token: string): Promise<GoogleProfile> {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken: token,
        audience: env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload)
        throw new UnauthorizedError(
          ERROR_MESSAGES.AUTH.INVALID_GOOGLE_TOKEN,
          ERROR_CODES.AUTH.INVALID_GOOGLE_TOKEN,
        );
      return {
        googleId: payload.sub,
        email: payload.email!,
        firstName: payload.given_name ?? "",
        lastName: payload.family_name ?? "",
        avatar: payload.picture,
      };
    } catch {
      throw new UnauthorizedError(
        ERROR_MESSAGES.AUTH.INVALID_GOOGLE_TOKEN,
        ERROR_CODES.AUTH.INVALID_GOOGLE_TOKEN,
      );
    }
  }
}
