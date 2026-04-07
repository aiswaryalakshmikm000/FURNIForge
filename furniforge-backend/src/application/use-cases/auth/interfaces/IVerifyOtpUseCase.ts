import { VerifyOtpDTO } from "@application/dtos/auth/VerifyOtpDTO.js"
import { UserResponseDTO } from "@application/dtos/user/userResponseDTO.js"

export interface IVerifyOtpUseCase {
    execute(data: VerifyOtpDTO): Promise<UserResponseDTO> 
}