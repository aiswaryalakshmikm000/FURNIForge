import { inject, injectable } from "inversify";
import type { IVerifyEmailUseCase } from "./interfaces/IVerifyEmailUseCase";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { ITokenService } from "../../../domain/services/ITokenService";
import { VerifyEmailRequestDTO, VerifyEmailResponseDTO } from "../../dtos/auth/VerifyEmailDTO";
import { BadRequestError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { TYPES } from "../../../infrastructure/di/types";

@injectable()
export class VerifyEmailUseCase implements IVerifyEmailUseCase {
    constructor(
        @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
        @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    ){}

    async execute(dto: VerifyEmailRequestDTO): Promise<VerifyEmailResponseDTO> {
        const payload = this._tokenService.verifyEmailVerificationToken(dto.token);
        const user = await this._userRepository.findById(payload.userId);

        if(!user) throw new BadRequestError(ERROR_MESSAGES.USER.NOT_FOUND)
        if(user.isVerified && user.passwordHash) throw new BadRequestError(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_VERIFIED);

        if (!user.isVerified) {
            user.verifyEmail();
            await this._userRepository.update(user.id, user);
        }

        const resetToken = this._tokenService.generateResetToken({userId: user.id})

        return {userId: user.id, email: user.email.value, verified: true, resetToken}
    }
}