import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { Prisma, TemplateField as PrismaField } from "../../../../generated/prisma";
import { Field } from "../../../../domain/entities/Field";
import { IFieldRepository } from "../../../../domain/repositories/IFieldRepository";
import { PrismaFieldMapper } from "../mapper/PrismaFieldMapper";
import { handlePrismaError } from "../errors/handlePrismaError";
import { RequirementFieldFieldListItem } from "../../../../domain/read-models/requirementFields/RequirementFieldFieldListItem";
import { FieldType } from "../../../../domain/enums/FieldType";

@injectable()
export class FieldRepository extends BaseRepository< Field, PrismaField, Prisma.TemplateFieldCreateInput, Prisma.TemplateFieldUpdateInput,  Prisma.TemplateFieldFindFirstArgs, Prisma.TemplateFieldFindManyArgs, Prisma.TemplateFieldWhereInput > implements IFieldRepository {
  protected model = prisma.templateField;

  protected toDomain(raw: PrismaField): Field {
    return PrismaFieldMapper.toDomain(raw);
  }

  protected toCreate(entity: Field): Prisma.TemplateFieldCreateInput {
    return PrismaFieldMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Field): Prisma.TemplateFieldUpdateInput {
    return PrismaFieldMapper.toUpdatePersistence(entity);
  }

  async findByTabAndLabel( tabId: string, label: string ): Promise<Field | null> {
    try {
      const field = await this.model.findFirst({ where: { tabId, label } });
      return field ? PrismaFieldMapper.toDomain(field) : null;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findByTabAndFieldKey( tabId: string, fieldKey: string ): Promise<Field | null> {
    try {
      const field = await this.model.findFirst({ where: { tabId, fieldKey } });
      return field ? PrismaFieldMapper.toDomain(field) : null;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findFieldsByTab( tabId: string ): Promise<RequirementFieldFieldListItem[]> {
  try {
    const rows = await this.model.findMany({
      where: { tabId, deletedAt: null },
      select: {
        id: true,
        tabId: true,
        label: true,
        fieldKey: true,
        fieldType: true,
        options: true,
        defaultValue: true,
        isRequired: true,
        isActive: true,
      },
      orderBy: { createdAt: "asc" },
    });
    return rows.map((row) => ({
      id: row.id,
      tabId: row.tabId,
      label: row.label,
      fieldKey: row.fieldKey,
      fieldType: row.fieldType as FieldType,
      options: row.options,
      defaultValue: row.defaultValue,
      isRequired: row.isRequired,
      isActive: row.isActive,
    }));
  } catch (error) {
    handlePrismaError(error);
  }
}
}