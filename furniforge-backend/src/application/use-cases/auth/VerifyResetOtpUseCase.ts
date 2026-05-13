import { NotFoundError } from "../../../domain/errors/AppError.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { Email } from "../../../domain/value-objects/Email.js";
import { OTP } from "../../../domain/value-objects/OTP.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
import { VerifyResetOtpDTO, VerifyResetOtpResponseDTO } from "../../dtos/auth/ForgotPasswordDTO.js";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IVerifyResetOtpUseCase } from "./interfaces/IVerifyResetOtpUSeCase.js";
import { ITokenService } from "../../../domain/services/ITokenService.js";

@injectable()
export class verifyResetOtpUseCase implements IVerifyResetOtpUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepo: IUserRepository,
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
  ) {}

  async execute(data: VerifyResetOtpDTO): Promise<VerifyResetOtpResponseDTO> {
    const emailVO = new Email(data.email);
    const optVO = new OTP(data.otp);

    const user = await this._userRepo.findByEmail(emailVO.value);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);

    await this._otpService.verifyOtp(user.id, user.email.value, optVO.value);

    const resetToken = this._tokenService.generateResetToken({userId: user.id});

    return {meta: {resetToken} };
  };
};