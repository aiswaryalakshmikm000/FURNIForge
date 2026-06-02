import { ResendOtpResponseDTO } from "../../../dtos/auth/ResendOtpResponseDTO";
import { ResendForgotPasswordOtpDTO } from "../../../dtos/auth/ForgotPasswordDTO";

export interface IResendForgotPasswordOtpUseCase {
  execute(data: ResendForgotPasswordOtpDTO): Promise<ResendOtpResponseDTO>;
}
