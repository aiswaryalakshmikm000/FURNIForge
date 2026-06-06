export interface IEmailService {
  sendOTPEmail(email: string, otp: string, name: string): Promise<void>;
  sendWelcomeEmail(email: string, name: string): Promise<void>;
  sendEmailVerification(email: string, name: string, link: string): Promise<void>;
  sendDesignerInvitation(email: string, name: string, link: string): Promise<void>;
}