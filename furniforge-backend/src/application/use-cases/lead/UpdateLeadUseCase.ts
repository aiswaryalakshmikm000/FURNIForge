import { inject, injectable } from "inversify";
import type { IUpdateLeadUseCase } from "./interfaces/IUpdateLeadUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { UpdateLeadFDTO } from "../../dtos/lead/UpdateLeadDTO";
import { LeadCommandMapper } from "../../mappers/lead/LeadCommandMapper";
import { LeadCommandResponseDTO } from "../../dtos/lead/LeadCommandResponseDTO";

@injectable()
export class UpdateLeadUseCase implements IUpdateLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private readonly leadRepository: ILeadRepository
  ) {}

  async execute( leadId: string, dto: UpdateLeadFDTO ): Promise<LeadCommandResponseDTO> {

    const lead = await this.leadRepository.findById(leadId);

    if (!lead) throw new NotFoundError( ERROR_MESSAGES.LEAD.NOT_FOUND);

    lead.updateDetails({
      name: dto.name,
      phone: dto.phone,
      location: dto.location,
      source: dto.source,
      packageType: dto.packageType ?? null,
      projectsInterestedIn: dto.projectsInterestedIn,
    });

    const updated = await this.leadRepository.update( lead.id, lead );

    return LeadCommandMapper.toResponse(updated);
  }
}