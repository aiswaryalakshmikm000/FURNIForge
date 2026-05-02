import { ForgotPasswordDTO, ForgotPasswordResponseDTO } from "../../../dtos/auth/ForgotPasswordDTO.js";

export interface IForgetPasswordUseCase {
    execute(data: ForgotPasswordDTO): Promise<ForgotPasswordResponseDTO>;
};