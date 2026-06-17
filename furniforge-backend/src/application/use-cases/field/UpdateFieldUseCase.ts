import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUpdateFieldUseCase } from "./interfaces/IUpdateFieldUseCase";
import type { IFieldRepository } from "../../../domain/repositories/IFieldRepository";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { FieldType } from "../../../domain/enums/FieldType";
import { generateFieldKey } from "../../../shared/utils/generateFieldKey";
import type { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../dtos/fields/fieldCommandDTO";
import { FieldCommandMapper } from "../../mappers/field/FieldCommandMapper";
import type { UpdateFieldDTO } from "../../dtos/fields/updateFieldDTO";

@injectable()
export class UpdateFieldUseCase implements IUpdateFieldUseCase {
  constructor(
    @inject(TYPES.IFieldRepository) private readonly fieldRepository: IFieldRepository
  ) {}

  async execute( params: FieldCommandRequestDTO, dto: UpdateFieldDTO ): Promise<FieldCommandResponseDTO> {

    const field = await this.fieldRepository.findById(params.id);
    if (!field) throw new NotFoundError( ERROR_MESSAGES.ADMIN.FIELD.NOT_FOUND );

    let fieldKey = field.fieldKey;

    if (dto.label !== field.label) {
      const existingLabel = await this.fieldRepository.findByTabAndLabel(
          field.tabId,
          dto.label
        );
      if ( existingLabel && existingLabel.id !== field.id ) {
        throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.LABEL_ALREADY_EXISTS );
      }

      console.log("Old Label:", field.label);
console.log("New Label:", dto.label);

      fieldKey = generateFieldKey(dto.label);

      const existingFieldKey = await this.fieldRepository.findByTabAndFieldKey(
          field.tabId,
          fieldKey
        );

      if ( existingFieldKey && existingFieldKey.id !== field.id ) {
        throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.FIELD_KEY_ALREADY_EXISTS );
      }
    }

    const options = dto.options?.split(",").map((option) => option.trim()).filter(Boolean) ?? [];

    const optionBasedFields = [
      FieldType.SELECT,
      FieldType.MULTI_SELECT,
      FieldType.CHECKBOX,
      FieldType.RADIO,
    ];

    const isOptionField = optionBasedFields.includes(dto.fieldType);

    if (isOptionField && options.length === 0) throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.OPTIONS_REQUIRED ); 

    if (!isOptionField && options.length > 0) throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.OPTIONS_NOT_ALLOWED );

    if ( dto.defaultValue && isOptionField && !options.includes(dto.defaultValue)) {
      throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.INVALID_DEFAULT_VALUE );
    }

    field.update({
      label: dto.label,
      fieldKey,
      fieldType: dto.fieldType,
      options,
      defaultValue: dto.defaultValue ?? null,
      isRequired: dto.isRequired,
    });

    const updatedField = await this.fieldRepository.update( field.id, field );

    return FieldCommandMapper.toResponse(updatedField);
  }
}