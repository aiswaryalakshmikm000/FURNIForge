import { RegisterResponseDTO } from "../../../dtos/auth/RegisterResponseDTOSchema.js";
import { RegisterUserDTO } from "../../../../application/dtos/auth/RegisterUserDTO.js";

export interface IRegisterUserUseCase {
  execute(data: RegisterUserDTO): Promise<RegisterResponseDTO>;
}