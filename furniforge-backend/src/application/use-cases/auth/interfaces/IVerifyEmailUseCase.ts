import type { VerifyEmailRequestDTO, VerifyEmailResponseDTO } from "../../../dtos/auth/VerifyEmailDTO";

export interface IVerifyEmailUseCase {
  execute(dto: VerifyEmailRequestDTO): Promise<VerifyEmailResponseDTO>;
}