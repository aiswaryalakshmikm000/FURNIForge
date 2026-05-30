import axios from "axios";
import type { IEmailService } from "../../domain/services/IEmailService";
import { InternalServerError } from "../../domain/errors/AppError";
import { env } from "../../infrastructure/config/env";
import { injectable, inject } from "inversify";
import {TYPES} from "../../infrastructure/di/types"
import type { ILogger } from "../../domain/services/ILogger";

@injectable()
export class EmailService implements IEmailService {

  constructor(
    @inject(TYPES.ILogger) private _logger: ILogger,
  ) {}

  private readonly _BREVO_URL = env.BREVO.URL;

  private async _sendEmail(to: string,
  templateId: number,
  params: Record<string, unknown>) {
    try {
      await axios.post(this._BREVO_URL, {
          sender: {
            name: env.BREVO.APP_NAME,
            email: env.BREVO.SENDER_EMAIL,
          },
          to: [{ email: to }],
          templateId,
          params,
        },
        {
          headers: {
            "api-key": env.BREVO.API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
            this._logger.error("Brevo API Error:", {response: error.response?.data, message: error.message});
        } else {
            this._logger.error("Unknown Error:", {error});
        }
        throw new InternalServerError("Failed to send email");
    }
  }

  async sendOTPEmail(email: string, otp: string, name: string): Promise<void> {
    try{
        await this._sendEmail(email, 3, {name, otp});
    } catch(error) {
        this._logger.error("OTP email failed", {email, error})
        throw error;
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    try{
        await this._sendEmail(email, 4, {name});
    } catch(error) {
        this._logger.error("Welcome email failed", {email, error})
        throw error;
    }
  }

  async sendEmailVerification(email: string, name: string, link: string): Promise<void> {
    try {
      await this._sendEmail(email, 5, {name, verificationLink: link});
    } catch (error) {
      this._logger.error("Email verification failed", {email, error});
      throw error;
    }
  }
}