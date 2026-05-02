import { VerifyResetOtpDTO, VerifyResetOtpResponseDTO } from "../../../dtos/auth/ForgotPasswordDTO.js";

export interface IVerifyResetOtpUseCase {
  execute(data: VerifyResetOtpDTO): Promise<VerifyResetOtpResponseDTO>; //here i need to hve a dto with meta resettoken
}