import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IDesignerRepository } from "../../../domain/repositories/IDesignerRepository";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { UpdateDesignerDTO, UpdateDesignerResponseDTO } from "../../dtos/designer/UpdateDesignerDTO";
import type { IUpdateDesignerUseCase } from "./interfaces/IUpdateDesignerUseCase";
import { DesignerCommandMapper } from "../../mappers/DesignerCommandMapper";

@injectable()
export class UpdateDesignerUseCase implements IUpdateDesignerUseCase {
  constructor(
    @inject(TYPES.IDesignerRepository) private readonly designerRepository: IDesignerRepository
  ) {}

  async execute( designerId: string, dto: UpdateDesignerDTO ): Promise<UpdateDesignerResponseDTO> {
    const designer = await this.designerRepository.findById(designerId);

    if (!designer) throw new NotFoundError( ERROR_MESSAGES.ADMIN.DESIGNER_NOT_FOUND );

    designer.updateDesignerDetails({
      firstName: dto.firstName,
      lastName: dto.lastName,
      phone: dto.phone,
    });

    const updated = await this.designerRepository.update( designer.id, designer );

    return DesignerCommandMapper.toUpdateResponse(updated)
  }
}