import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IDesignerRepository } from "../../../domain/repositories/IDesignerRepository";
import type { IToggleDesignerBlockUseCase } from "./interfaces/IToggleDesignerBlockUseCase";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { DesignerCommandMapper } from "../../mappers/designer/DesignerCommandMapper";
import type { DesignerCommandRequestDTO, DesignerCommandResponseDTO } from "../../dtos/designer/DesignerCommandDTO";

@injectable()
export class ToggleDesignerBlockUseCase implements IToggleDesignerBlockUseCase {
  constructor(
    @inject(TYPES.IDesignerRepository) private _designerRepository: IDesignerRepository
  ) {}

  async execute( dto: DesignerCommandRequestDTO ): Promise<DesignerCommandResponseDTO> {
    const designer = await this._designerRepository.findById(dto.id);

    if (!designer) throw new NotFoundError( ERROR_MESSAGES.ADMIN.DESIGNER_NOT_FOUND );

    designer.isBlocked ? designer.unblock() : designer.block()

    const updatedDesigner = await this._designerRepository.update(
        designer.id,
        designer
      );

    return DesignerCommandMapper.toResponse(updatedDesigner);
  }
}