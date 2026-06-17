import type { ForgotPasswordDTO, ForgotPasswordResponseDTO } from "../../../dtos/auth/ForgotPasswordDTO";

export interface IForgetPasswordUseCase {
    execute(data: ForgotPasswordDTO): Promise<ForgotPasswordResponseDTO>;
};