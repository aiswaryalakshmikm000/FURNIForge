import { ResendOtpResponseDTO } from "../../../dtos/auth/ResendOtpResponseDTO.js";
import { ResendForgotPasswordOtpDTO } from "../../../dtos/auth/ForgotPasswordDTO.js";

export interface IResendForgotPasswordOtpUseCase {
 execute(data: ResendForgotPasswordOtpDTO): Promise<ResendOtpResponseDTO> 
}