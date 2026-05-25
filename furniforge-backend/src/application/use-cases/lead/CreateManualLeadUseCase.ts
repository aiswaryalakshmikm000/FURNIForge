import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateManualLeadUseCase } from "./interfaces/ICreateManualLeadUseCase";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import type { CreateLeadDTO } from "../../dtos/lead/CreateLeadDTO";
import type { LeadResponseDTO } from "../../dtos/lead/LeadResponseDTO";
import { generateRegNo } from "../../../shared/utils/generateRegNo";
import { Lead } from "../../../domain/entities/Lead";
import { LeadResponseMapper } from "../../mappers/LeadResponseMapper";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Email } from "../../../domain/value-objects/Email";
import { User } from "../../../domain/entities/User";

@injectable()
export class CreateManualLeadUseCase implements ICreateManualLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private _leadRepository: ILeadRepository,
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateLeadDTO): Promise<LeadResponseDTO> {
    
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
    } else {
      clientId = existingUser.id
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

    return LeadResponseMapper.toDTO({
      id: createdLead.id,
      leadRegNo: createdLead.leadRegNo,
      name: createdLead.name,
      email: createdLead.email,
      phone: createdLead.phone,
      location: dto.location ?? null,
      avatar: null,
      source: createdLead.source,
      status: createdLead.status,
      projectsInterestedIn: createdLead.projectsInterestedIn,
      packageType: createdLead.packageType,
      assignedDesignerName: null,
      createdAt: createdLead.createdAt,
    });
  }
}
