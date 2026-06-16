import { Prisma, TemplateField as PrismaField } from "../../../../generated/prisma";
import { Field } from "../../../../domain/entities/Field";
import { FieldType } from "../../../../domain/enums/FieldType";

export class PrismaFieldMapper {

  static toDomain( raw: PrismaField ): Field {
    return Field.fromPersistence({
      id: raw.id,
      tabId: raw.tabId,
      label: raw.label,
      fieldKey: raw.fieldKey,
      fieldType: raw.fieldType as FieldType,
      options: raw.options,
      defaultValue: raw.defaultValue ?? null,
      isActive: raw.isActive,
      isRequired: raw.isRequired,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence( field: Field ): Prisma.TemplateFieldCreateInput {
    return {
      id: field.id,
      label: field.label,
      fieldKey: field.fieldKey,
      fieldType: field.fieldType,
      options: field.options,
      defaultValue: field.defaultValue ?? null,
      isRequired: field.isRequired,
      tab: { connect: { id: field.tabId } },
    };
  }

  static toUpdatePersistence( field: Field ): Prisma.TemplateFieldUpdateInput {
    return {
      label: field.label,
      fieldKey: field.fieldKey,
      fieldType: field.fieldType,
      options: field.options,
      defaultValue: field.defaultValue ?? null,
      isRequired: field.isRequired,
      isActive: field.isActive,
    };
  }
}