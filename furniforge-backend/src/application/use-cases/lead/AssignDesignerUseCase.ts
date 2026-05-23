import { inject, injectable } from "inversify";
import type { IAssignDesignerUseCase } from "./interfaces/IAssignDesignerUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { AssignDesignerResponseDTO } from "../../dtos/lead/AssignDesignerDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

@injectable()
export class AssignDesignerUseCase implements IAssignDesignerUseCase {

  constructor(
    @inject(TYPES.ILeadRepository) private readonly _leadRepository: ILeadRepository,
    @inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository,
  ) {}

  async execute( leadId: string, designerId: string ): Promise<AssignDesignerResponseDTO> {

    const lead = await this._leadRepository.findById(leadId);

    if (!lead) throw new NotFoundError(ERROR_MESSAGES.ADMIN.LEAD_NOT_FOUND);
    
    const designer = await this._userRepository.findById(designerId);

    if (!designer) throw new NotFoundError(ERROR_MESSAGES.ADMIN.DESIGNER_NOT_FOUND);

    lead.assignDesigner(designer.id);

    const updatedLead = await this._leadRepository.update( lead.id, lead );

    return {
      leadId: updatedLead.id,
      designerId: designer.id,
      designerName: `${designer.firstName} ${designer.lastName}`,
      status: updatedLead.status,
      assignedAt: updatedLead.assignedAt!,
    };
  }
}