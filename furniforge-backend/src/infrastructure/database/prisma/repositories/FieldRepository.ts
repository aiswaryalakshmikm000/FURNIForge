import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { Prisma, TemplateField as PrismaField } from "../../../../generated/prisma";
import { Field } from "../../../../domain/entities/Field";
import { IFieldRepository } from "../../../../domain/repositories/IFieldRepository";
import { PrismaFieldMapper } from "../mapper/PrismaFieldMapper";
import { handlePrismaError } from "../errors/handlePrismaError";

@injectable()
export class FieldRepository extends BaseRepository< Field, PrismaField, Prisma.TemplateFieldCreateInput, Prisma.TemplateFieldUpdateInput > implements IFieldRepository {
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
}