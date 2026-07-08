import { inject, injectable } from "inversify";
import type { IDesignerRepository } from "../../../domain/repositories/IDesignerRepository";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IEmailService } from "../../../domain/services/IEmailService";
import type { ITokenService } from "../../../domain/services/ITokenService";
import { TYPES } from "../../../infrastructure/di/types";
import type { CreateDesignerDTO } from "../../dtos/designer/CreateDesignerDTO";
import type { ICreateDesignerUseCase } from "./interfaces/ICreateDesignerUseCase";
import { ConflictError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { Email } from "../../../domain/value-objects/Email";
import { generateRegNo } from "../../../shared/utils/generateRegNo";
import { User } from "../../../domain/entities/User";
import { env } from "../../../infrastructure/config/env";
import { DesignerCommandMapper } from "../../mappers/designer/DesignerCommandMapper";
import type { DesignerCommandResponseDTO } from "../../dtos/designer/DesignerCommandDTO";

@injectable()
export class CreateDesignerUseCase implements ICreateDesignerUseCase {
  constructor(
    @inject(TYPES.IDesignerRepository) private _designerRepository: IDesignerRepository,
    @inject(TYPES.IUserRepository)  private _userRepository: IUserRepository,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    @inject(TYPES.IEmailService) private _emailService: IEmailService,
  ) {}

  async execute( dto: CreateDesignerDTO ): Promise<DesignerCommandResponseDTO> {

    const emailVO = new Email(dto.email);

    const existingEmail = await this._userRepository.findByEmail(emailVO.value);
    if (existingEmail) throw new ConflictError( ERROR_MESSAGES.AUTH.EMAIL_ALREADY_EXISTS ) 

    const existingPhone = await this._userRepository.findByPhone(dto.phone);
    if (existingPhone) throw new ConflictError( ERROR_MESSAGES.AUTH.PHONE_ALREADY_EXISTS )

    const seq = await this._designerRepository.getNextDesignerSequence();
    const designerRegNo = generateRegNo({ prefix: "DES", sequence: seq });

    const designer = User.createDesigner({
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      phone: dto.phone,
      designerRegNo,
    });
     
    const created = await this._designerRepository.create(designer);

    const token = this._tokenService.generateEmailVerificationToken({
      userId: created.id,
      email: created.email.value,
      role: created.role,
    });

    const inviteLink = `${env.CORS.ORIGIN}/verify-email?token=${token}`;
    await this._emailService.sendDesignerInvitation( created.email.value, created.firstName, inviteLink );

    return DesignerCommandMapper.toResponse(created)
  }
}