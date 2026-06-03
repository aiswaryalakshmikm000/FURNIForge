import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateManualLeadUseCase } from "./interfaces/ICreateManualLeadUseCase";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import { generateRegNo } from "../../../shared/utils/generateRegNo";
import { Lead } from "../../../domain/entities/Lead";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Email } from "../../../domain/value-objects/Email";
import { User } from "../../../domain/entities/User";
import type { ITokenService } from "../../../domain/services/ITokenService";
import type { IEmailService } from "../../../domain/services/IEmailService";
import { env } from "../../../infrastructure/config/env";
import type { CreateLeadDTO } from "../../dtos/lead/CreateLeadDTO";
import { LeadCommandMapper } from "../../mappers/LeadCommandMapper";
import { LeadCommandResponseDTO } from "../../dtos/lead/LeadCommandResponseDTO";

@injectable()
export class CreateManualLeadUseCase implements ICreateManualLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private _leadRepository: ILeadRepository,
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    @inject(TYPES.IEmailService) private _emailService: IEmailService,
  ) {}

  async execute(dto: CreateLeadDTO): Promise<LeadCommandResponseDTO> {
    
    //create user ---
    const emailVO = new Email(dto.email);
    const existingUser = await this._userRepository.findByEmail(emailVO.value);

    let clientId: string | null = null;

    if (!existingUser) {
      const user = User.create({
        firstName: dto.name.split(" ")[0],
        lastName: dto.name.split(" ").slice(1).join(" "),
        email: dto.email,
        phone: dto.phone,
        passwordHash: null,
      });

      const createdUser = await this._userRepository.create(user)
      clientId = createdUser.id;

      const verificationToken = this._tokenService.generateEmailVerificationToken({userId: createdUser.id, email: createdUser.email.value, role: createdUser.role});
      const verificationLink = `${env.CORS.ORIGIN}/verify-email?token=${verificationToken}`;

      await this._emailService.sendEmailVerification(createdUser.email.value, createdUser.firstName, verificationLink)
    } else {
      clientId = existingUser.id;

      if(!existingUser.isVerified){
        const verificationToken = this._tokenService.generateEmailVerificationToken({userId: existingUser.id, email: existingUser.email.value, role: existingUser.role});
        const verificationLink = `${env.CORS.ORIGIN}/verify-email?token=${verificationToken}`;

        await this._emailService.sendEmailVerification(existingUser.email.value, existingUser.firstName, verificationLink)
      }
    }

    //create lead ----
    const seq = await this._leadRepository.getNextLeadSequence();
    const leadRegNo = generateRegNo({ prefix: "LEAD", sequence: seq });

    const lead = Lead.create({
      leadRegNo,
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      location: dto.location,
      source: dto.source,
      clientId,
      projectsInterestedIn: dto.projectsInterestedIn,
      packageType: dto.packageType,
    });

    const createdLead = await this._leadRepository.create(lead);

    return LeadCommandMapper.toResponse(createdLead);
  }
}
