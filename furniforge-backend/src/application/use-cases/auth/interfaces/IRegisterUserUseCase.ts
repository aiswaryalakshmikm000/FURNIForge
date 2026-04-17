import { AuthActionResponseDTO } from "../../../../application/dtos/auth/AuthActionResponseDTO.js";
import { RegisterUserDTO } from "../../../../application/dtos/auth/RegisterUserDTO.js";

export interface IRegisterUserUseCase {
  execute(data: RegisterUserDTO): Promise<AuthActionResponseDTO>;
}