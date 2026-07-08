import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import type { IToggleDeliverableStatusUseCase } from "./interfaces/IToggleDeliverableStatusUseCase";
import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../dtos/deliverables/DeliverableCommandDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { DeliverableCommandMapper } from "../../mappers/deliverable/DeliverableCommandMapper";

@injectable()
export class ToggleDeliverableStatusUseCase implements IToggleDeliverableStatusUseCase {
  constructor(
    @inject(TYPES.IDeliverableRepository) private readonly _deliverableRepository: IDeliverableRepository
  ) {}

  async execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO> {

    const deliverable = await this._deliverableRepository.findById(dto.id);

    if (!deliverable)  throw new NotFoundError( ERROR_MESSAGES.ADMIN.DELIVERABLE.NOT_FOUND );
    
    deliverable.toggleStatus();

    const updated = await this._deliverableRepository.update(
        deliverable.id,
        deliverable
      );

    return DeliverableCommandMapper.toResponse(updated);
  }
}