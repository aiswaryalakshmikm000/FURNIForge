import axios from "axios";
import { IEmailService } from "@domain/services/IEmailService.js";
import { InternalServerError } from "@domain/errors/AppError.js";
import { env } from "@infrastructure/config/env.js";
import { injectable, inject } from "inversify";
import {TYPES} from "@infrastructure/di/types.js"
import { Logger } from "winston";

@injectable()
export class EmailService implements IEmailService {

  constructor(
    @inject(TYPES.Logger) private logger: Logger,
  ) {}

  private readonly BREVO_URL = env.BREVO.URL;

  private async sendEmail(to: string,
  templateId: number,
  params: Record<string, any>) {
    try {
      await axios.post(this.BREVO_URL, {
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
            this.logger.error("Brevo API Error:", {response: error.response?.data, message: error.message});
        } else {
            this.logger.error("Unknown Error:", {error});
        }
        throw new InternalServerError("Failed to send email");
    }
  }

  async sendOTPEmail(email: string, otp: string, name: string): Promise<void> {
    try{
        await this.sendEmail(email, 3, {name, otp});
    } catch(error) {
        this.logger.error("OTP email failed", {email, error})
        throw error;
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    try{
        await this.sendEmail(email, 4, {name});
    } catch(error) {
        this.logger.error("Welcome email failed", {email, error})
        throw error;
    }
  }
}