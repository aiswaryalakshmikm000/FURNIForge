import { inject, injectable } from "inversify";
import { Deliverable } from "../../../domain/entities/Deliverable";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateDeliverableUseCase } from "./interfaces/ICreateDeliverableUseCase";
import type { DeliverableCommandResponseDTO } from "../../dtos/deliverables/deliverableCommandDTO";
import type { DeliverableFormDTO } from "../../dtos/deliverables/deliverableFormDTO";
import { DeliverableCommandMapper } from "../../mappers/deliverable/DeliverableCommandMapper";
import { ConflictError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

@injectable()
export class CreateDeliverableUseCase implements ICreateDeliverableUseCase{ 
    constructor(
        @inject(TYPES.IDeliverableRepository) private _deliverableRepository: IDeliverableRepository,
  ) {}

  async execute( dto: DeliverableFormDTO & {createdById: string}): Promise<DeliverableCommandResponseDTO> {

    const exists = await this._deliverableRepository.findByName(dto.name);

    if (exists) throw new ConflictError(ERROR_MESSAGES.ADMIN.DELIVERABLE.ALREADY_EXISTS);

    const deliverable = Deliverable.create({
      name: dto.name,
      description: dto.description,
      icon: dto.icon,
      createdById: dto.createdById,
    });

    const created = await this._deliverableRepository.create(deliverable);

    return DeliverableCommandMapper.toResponse(created)
  }
}