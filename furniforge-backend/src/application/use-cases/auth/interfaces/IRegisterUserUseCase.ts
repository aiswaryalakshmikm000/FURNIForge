import { RegisterResponseDTO } from "../../../dtos/auth/RegisterResponseDTOSchema";
import { RegisterUserDTO } from "../../../../application/dtos/auth/RegisterUserDTO";

export interface IRegisterUserUseCase {
  execute(data: RegisterUserDTO): Promise<RegisterResponseDTO>;
}
