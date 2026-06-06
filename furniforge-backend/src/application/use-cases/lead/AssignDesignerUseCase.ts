import { inject, injectable } from "inversify";
import type { IAssignDesignerUseCase } from "./interfaces/IAssignDesignerUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { LeadCommandMapper } from "../../mappers/LeadCommandMapper";
import type { LeadCommandResponseDTO } from "../../dtos/lead/LeadCommandResponseDTO";
import { AssignDesignerDTO } from "../../dtos/lead/AssignDesignerDTO";

@injectable()
export class AssignDesignerUseCase implements IAssignDesignerUseCase {

  constructor(
    @inject(TYPES.ILeadRepository) private readonly _leadRepository: ILeadRepository,
    @inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository,
  ) {}

  async execute( leadId: string, dto: AssignDesignerDTO): Promise<LeadCommandResponseDTO> {

    const lead = await this._leadRepository.findById(leadId);

    if (!lead) throw new NotFoundError(ERROR_MESSAGES.ADMIN.LEAD_NOT_FOUND);
    
    const designer = await this._userRepository.findById(dto.designerId);

    if (!designer) throw new NotFoundError(ERROR_MESSAGES.ADMIN.DESIGNER_NOT_FOUND);
    if (designer.isBlocked) throw new BadRequestError(ERROR_MESSAGES.ADMIN.DESIGNER_BLOCKED)

    lead.assignDesigner(designer.id);

    const updatedLead = await this._leadRepository.update( lead.id, lead );

    return LeadCommandMapper.toResponse(updatedLead)
  }
}