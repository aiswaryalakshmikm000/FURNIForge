import { ResendOtpResponseDTO } from "../../../dtos/auth/ResendOtpResponseDTO";
import { ResendOtpDTO } from "../../../../application/dtos/auth/ResendOtpDTO";

export interface IResendOtpUseCase {
  execute(data: ResendOtpDTO): Promise<ResendOtpResponseDTO>;
}
