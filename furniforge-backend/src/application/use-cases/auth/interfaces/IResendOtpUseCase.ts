import { AuthActionResponseDTO } from "../../../../application/dtos/auth/AuthActionResponseDTO.js";
import { ResendOtpDTO } from "../../../../application/dtos/auth/ResendOtpDTO.js";

export interface IResendOtpUseCase {
 execute(data: ResendOtpDTO): Promise<AuthActionResponseDTO> 
}