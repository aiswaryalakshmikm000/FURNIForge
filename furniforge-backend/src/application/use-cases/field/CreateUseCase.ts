import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateFieldUseCase } from "./interfaces/ICreateFieldUseCase";
import type { IFieldRepository } from "../../../domain/repositories/IFieldRepository";
import { Field } from "../../../domain/entities/Field";
import { FieldType } from "../../../domain/enums/FieldType";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import type { ITabRepository } from "../../../domain/repositories/ITabRepository";
import type { CreateFieldDTO } from "../../dtos/fields/createFieldDTO";
import type { FieldCommandResponseDTO } from "../../dtos/fields/fieldCommandDTO";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { FieldCommandMapper } from "../../mappers/field/FieldCommandMapper";
import { generateFieldKey } from "../../../shared/utils/generateFieldKey";

@injectable()
export class CreateFieldUseCase implements ICreateFieldUseCase {
  constructor(
    @inject(TYPES.IFieldRepository) private readonly fieldRepository: IFieldRepository,
    @inject(TYPES.ITabRepository) private readonly tabRepository: ITabRepository
  ) {}

  async execute( dto: CreateFieldDTO ): Promise<FieldCommandResponseDTO> {

    const tab = await this.tabRepository.findById(dto.tabId);
    if (!tab)  throw new NotFoundError(ERROR_MESSAGES.ADMIN.TAB.NOT_FOUND);

    const existingLabel = await this.fieldRepository.findByTabAndLabel(
      dto.tabId,
      dto.label
    );
    if (existingLabel) throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.LABEL_ALREADY_EXISTS );
    
    const fieldKey = generateFieldKey(dto.label);

    const existingFieldKey = await this.fieldRepository.findByTabAndFieldKey(
        dto.tabId,
        fieldKey
      );
    if (existingFieldKey) throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.FIELD_KEY_ALREADY_EXISTS );
    
    const options = dto.options ?.split(",").map((option) => option.trim()).filter(Boolean) ?? [];

    const optionBasedFields = [
      FieldType.SELECT,
      FieldType.MULTI_SELECT,
      FieldType.CHECKBOX,
      FieldType.RADIO,
    ];

    const isOptionField = optionBasedFields.includes(dto.fieldType);

    if (isOptionField && options.length === 0)  throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.OPTIONS_REQUIRED );
    
    if (!isOptionField && options.length > 0)  throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.OPTIONS_NOT_ALLOWED );    

    if (dto.defaultValue && isOptionField && !options.includes(dto.defaultValue)) {
      throw new BadRequestError( ERROR_MESSAGES.ADMIN.FIELD.INVALID_DEFAULT_VALUE );
    }

    const field = Field.create({
      tabId: dto.tabId,
      label: dto.label,
      fieldKey,
      fieldType: dto.fieldType,
      options,
      defaultValue: dto.defaultValue ?? null,
      isRequired: dto.isRequired,
    });

    const createdField = await this.fieldRepository.create(field);

    return FieldCommandMapper.toResponse(createdField)
  }
}