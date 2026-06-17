import type { RegisterResponseDTO } from "../../../dtos/auth/RegisterResponseDTOSchema";
import type { RegisterUserDTO } from "../../../../application/dtos/auth/RegisterUserDTO";

export interface IRegisterUserUseCase {
  execute(data: RegisterUserDTO): Promise<RegisterResponseDTO>;
}
