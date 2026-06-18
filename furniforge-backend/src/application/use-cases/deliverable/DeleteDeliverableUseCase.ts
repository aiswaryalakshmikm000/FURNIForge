import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import type { IDeleteDeliverableUseCase } from "./interfaces/IDeleteDeliverableUseCase";
import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../dtos/deliverables/DeliverableCommandDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { DeliverableCommandMapper } from "../../mappers/deliverable/DeliverableCommandMapper";

@injectable()
export class DeleteDeliverableUseCase implements IDeleteDeliverableUseCase {
  constructor(
    @inject(TYPES.IDeliverableRepository) private _deliverableRepository: IDeliverableRepository,
  ) {}

  async execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO> {
    const deliverable = await this._deliverableRepository.findById(dto.id);
    if (!deliverable) throw new NotFoundError( ERROR_MESSAGES.ADMIN.DELIVERABLE.NOT_FOUND );
    
    await this._deliverableRepository.delete(dto.id);
    return DeliverableCommandMapper.toResponse( deliverable );
  }
}