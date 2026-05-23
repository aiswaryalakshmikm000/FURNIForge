import { VerifyOtpDTO } from "../../../../application/dtos/auth/VerifyOtpDTO"
import { AuthResult } from "../../../../application/dtos/auth/AuthResult"

export interface IVerifyOtpUseCase {
    execute(data: VerifyOtpDTO): Promise<AuthResult> 
}