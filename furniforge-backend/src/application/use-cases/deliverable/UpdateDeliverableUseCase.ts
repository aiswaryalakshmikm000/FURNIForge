import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUpdateDeliverableUseCase } from "./interfaces/IUpdateDeliverableUseCase";
import type { DeliverableFormDTO } from "../../dtos/deliverables/deliverableFormDTO";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import { DeliverableCommandResponseDTO } from "../../dtos/deliverables/deliverableCommandDTO";
import { ConflictError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { DeliverableCommandMapper } from "../../mappers/deliverable/DeliverableCommandMapper";

@injectable()
export class UpdateDeliverableUseCase implements IUpdateDeliverableUseCase {
  constructor(
    @inject(TYPES.IDeliverableRepository) private  _deliverableRepository: IDeliverableRepository,
  ) {}

  async execute( deliverableId: string, dto: DeliverableFormDTO ): Promise<DeliverableCommandResponseDTO> {
    const deliverable = await this._deliverableRepository.findById(deliverableId);

  if (!deliverable)  throw new NotFoundError( ERROR_MESSAGES.ADMIN.DELIVERABLE.NOT_FOUND );
  
  const existing = await this._deliverableRepository.findByName(dto.name);

  if ( existing && existing.id !== deliverable.id ) {
    throw new ConflictError( ERROR_MESSAGES.ADMIN.DELIVERABLE.CONFLICT );
  }

  deliverable.update(
    dto.name,
    dto.description,
    dto.icon
  );

  const updated = await this._deliverableRepository.update(
      deliverable.id,
      deliverable
    );

  return DeliverableCommandMapper.toResponse(updated);
}
}