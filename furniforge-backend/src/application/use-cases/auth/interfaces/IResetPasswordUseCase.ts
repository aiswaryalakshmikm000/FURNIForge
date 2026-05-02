import { ResetPasswordDTO } from "../../../dtos/auth/ForgotPasswordDTO.js";

export interface IResetPasswordUseCase {
  execute(data: ResetPasswordDTO): Promise<void>;
}