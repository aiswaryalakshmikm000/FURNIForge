import { inject, injectable } from "inversify";
import type { ISoftDeleteFieldUseCase } from "./interfaces/ISoftDeleteFieldUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { IFieldRepository } from "../../../domain/repositories/IFieldRepository";
import type { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../dtos/fields/fieldCommandDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { FieldCommandMapper } from "../../mappers/field/FieldCommandMapper";

@injectable()
export class softDeleteFieldUseCasea implements ISoftDeleteFieldUseCase {
    constructor (
        @inject(TYPES.IFieldRepository) private _fieldRepository: IFieldRepository,
    ) {}
    async execute(params: FieldCommandRequestDTO): Promise<FieldCommandResponseDTO> {

        const field = await this._fieldRepository.findById(params.id);
        if(!field) throw new NotFoundError(ERROR_MESSAGES.ADMIN.FIELD.NOT_FOUND);

        field.softDelete();
        
        const updated = await this._fieldRepository.update( field.id , field )

        return FieldCommandMapper.toResponse(updated)
    }
}