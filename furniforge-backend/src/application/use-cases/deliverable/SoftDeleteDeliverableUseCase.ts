import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import type { ISoftDeleteDeliverableUseCase } from "./interfaces/ISoftDeleteDeliverableUseCase";
import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../dtos/deliverables/DeliverableCommandDTO";
import { DeliverableCommandMapper } from "../../mappers/deliverable/DeliverableCommandMapper";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

@injectable() 
  export class SoftDeleteDeliverableUseCase implements ISoftDeleteDeliverableUseCase {
  constructor(
    @inject(TYPES.IDeliverableRepository) private _deliverableRepository: IDeliverableRepository,
  ) {}

  async execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO> {

    const deliverable = await this._deliverableRepository.findById(dto.id);

    if (!deliverable) throw new NotFoundError( ERROR_MESSAGES.ADMIN.DELIVERABLE.NOT_FOUND );
    
    deliverable.softDelete();

    const updated = await this._deliverableRepository.update(
        deliverable.id,
        deliverable,
      );

    return DeliverableCommandMapper.toResponse( updated );
  }
}