import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateManualLeadUseCase } from "./interfaces/ICreateManualLeadUseCase";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import type { CreateLeadDTO } from "../../dtos/lead/CreateLeadDTO";
import type { LeadResponseDTO } from "../../dtos/lead/LeadResponseDTO";
import { generateRegNo } from "../../../shared/utils/generateRegNo";
import { Lead } from "../../../domain/entities/Lead";
import { LeadResponseMapper } from "../../mappers/LeadResponseMapper";


@injectable()
export class CreateManualLeadUseCase implements ICreateManualLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private _leadRepository: ILeadRepository
  ) {}

  async execute( dto: CreateLeadDTO ): Promise<LeadResponseDTO> {

    const seq = await this._leadRepository.getNextLeadSequence();

    const leadRegNo = generateRegNo({ prefix: "LEAD", sequence: seq, });

    const lead = Lead.create({
      leadRegNo,
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      location: dto.location,
      source: dto.source,
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