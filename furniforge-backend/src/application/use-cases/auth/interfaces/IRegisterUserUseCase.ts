import { RegisterUserDTO } from "@application/dtos/auth/RegisterUserDTO.js";
import { RegisterResponseDTO } from "@application/dtos/auth/RegisterResponseDTO.js";

export interface IRegisterUserUseCase {
  execute(data: RegisterUserDTO): Promise<RegisterResponseDTO>;
}