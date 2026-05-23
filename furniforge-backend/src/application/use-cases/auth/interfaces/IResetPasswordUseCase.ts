import { ResetPasswordDTO } from "../../../dtos/auth/ForgotPasswordDTO";

export interface IResetPasswordUseCase {
  execute(data: ResetPasswordDTO): Promise<void>;
}