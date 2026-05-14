import { VerifyResetOtpDTO, VerifyResetOtpResponseDTO } from "../../../dtos/auth/ForgotPasswordDTO";

export interface IVerifyResetOtpUseCase {
  execute(data: VerifyResetOtpDTO): Promise<VerifyResetOtpResponseDTO>; 
}