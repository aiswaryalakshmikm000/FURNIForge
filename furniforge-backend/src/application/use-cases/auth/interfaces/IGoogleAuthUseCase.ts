import { AuthResult } from "../../../dtos/auth/AuthResult";
import type { GoogleAuthDTO } from "../../../dtos/auth/GoogleAuthDTO";

export interface IGoogleAuthUseCase {
  execute(data: GoogleAuthDTO): Promise<AuthResult>;
}
