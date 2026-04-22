import { ResendOtpResponseDTO } from "../../../dtos/auth/ResendOtpResponseDTO.js";
import { ResendOtpDTO } from "../../../../application/dtos/auth/ResendOtpDTO.js";

export interface IResendOtpUseCase {
 execute(data: ResendOtpDTO): Promise<ResendOtpResponseDTO> 
}