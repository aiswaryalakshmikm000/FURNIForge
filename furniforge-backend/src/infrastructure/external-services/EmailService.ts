import axios from "axios";
import { IEmailService } from "@domain/services/IEmailService.js";
import { InternalServerError } from "@domain/errors/AppError.js";
import { env } from "@infrastructure/config/env.js";

export class EmailService implements IEmailService {

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
            console.error("Brevo Error:", error.response?.data || error.message);
        } else {
            console.error("Unknown Error:", error);
        }
        throw new InternalServerError("Failed to send email");
    }
  }

  async sendOTPEmail(email: string, otp: string, name: string): Promise<void> {
    try{
        await this.sendEmail(email, 3, {name, otp});
    } catch(error) {
        console.log("Verify email failed", error)
        throw error;
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    try{
        await this.sendEmail(email, 4, {name});
    } catch(error) {
        console.log("Welcome email failed", error)
        throw error;
    }
  }
}