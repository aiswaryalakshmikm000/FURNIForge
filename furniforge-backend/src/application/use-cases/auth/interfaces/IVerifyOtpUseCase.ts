import { VerifyOtpDTO } from "../../../../application/dtos/auth/VerifyOtpDTO.js"
import { AuthResult } from "../../../../application/dtos/auth/AuthResult.js"

export interface IVerifyOtpUseCase {
    execute(data: VerifyOtpDTO): Promise<AuthResult> 
}