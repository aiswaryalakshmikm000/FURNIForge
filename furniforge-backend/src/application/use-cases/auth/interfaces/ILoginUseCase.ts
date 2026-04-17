import { LoginDTO } from "../../../../application/dtos/auth/LoginUserDTO.js";
import { AuthResult } from "../../../../application/dtos/auth/AuthResult.js";

export interface ILoginUseCase {
  execute(data: LoginDTO): Promise<AuthResult>;
}