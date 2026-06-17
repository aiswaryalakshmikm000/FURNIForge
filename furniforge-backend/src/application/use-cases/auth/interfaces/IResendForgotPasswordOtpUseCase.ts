import type { ResendOtpResponseDTO } from "../../../dtos/auth/ResendOtpResponseDTO";
import type { ResendForgotPasswordOtpDTO } from "../../../dtos/auth/ForgotPasswordDTO";

export interface IResendForgotPasswordOtpUseCase {
  execute(data: ResendForgotPasswordOtpDTO): Promise<ResendOtpResponseDTO>;
}
