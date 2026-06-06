import { inject, injectable } from "inversify";
import type { IDeleteLeadUseCase } from "./interfaces/IDeleteLeadUseCase";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import { TYPES } from "../../../infrastructure/di/types";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { NotFoundError } from "../../../domain/errors/AppError";
import { LeadCommandRequestDTO, LeadCommandResponseDTO } from "../../dtos/lead/LeadCommandResponseDTO";
import { LeadCommandMapper } from "../../mappers/lead/LeadCommandMapper";

@injectable()
export class DeleteLeadUseCase implements IDeleteLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private readonly leadRepository: ILeadRepository
  ) {}

  async execute( dto: LeadCommandRequestDTO ): Promise<LeadCommandResponseDTO> {

    const lead = await this.leadRepository.findById(dto.id);
    if (!lead) throw new NotFoundError( ERROR_MESSAGES.LEAD.NOT_FOUND );

    await this.leadRepository.delete(lead.id);

    return LeadCommandMapper.toResponse(lead)
  }
}