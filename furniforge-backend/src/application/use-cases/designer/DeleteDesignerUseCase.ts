import { inject, injectable } from "inversify";
import type { IDeleteDesignerUseCase } from "./interfaces/IDeleteDesignerUseCase";
import type { IDesignerRepository } from "../../../domain/repositories/IDesignerRepository";
import { TYPES } from "../../../infrastructure/di/types";
import type { DesignerCommandRequestDTO, DesignerCommandResponseDTO } from "../../dtos/designer/DesignerCommandDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { DesignerCommandMapper } from "../../mappers/DesignerCommandMapper";

injectable()
export class DeleteDesignerUseCase implements IDeleteDesignerUseCase {
    constructor(
        @inject(TYPES.IDesignerRepository) private _designerRepository: IDesignerRepository, 
    ){}

    async execute (dto: DesignerCommandRequestDTO): Promise<DesignerCommandResponseDTO> {
        console.log("delete desigesnrr usecase hit ")
        const designer = await this._designerRepository.findById(dto.id)
        console.log(designer)
        if(!designer) throw new NotFoundError(ERROR_MESSAGES.ADMIN.DESIGNER_NOT_FOUND)

        await this._designerRepository.delete(dto.id);

        return DesignerCommandMapper.toResponse(designer)
    }
}