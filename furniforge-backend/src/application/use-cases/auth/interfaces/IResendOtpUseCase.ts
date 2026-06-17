import type { ResendOtpResponseDTO } from "../../../dtos/auth/ResendOtpResponseDTO";
import type { ResendOtpDTO } from "../../../../application/dtos/auth/ResendOtpDTO";

export interface IResendOtpUseCase {
  execute(data: ResendOtpDTO): Promise<ResendOtpResponseDTO>;
}
