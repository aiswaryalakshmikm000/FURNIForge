import { LoginDTO } from "../../../../application/dtos/auth/LoginUserDTO";
import { AuthResult } from "../../../../application/dtos/auth/AuthResult";

export interface ILoginUseCase {
  execute(data: LoginDTO): Promise<AuthResult>;
}
