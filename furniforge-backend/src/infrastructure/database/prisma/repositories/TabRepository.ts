import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { PrismaTabMapper } from "../mapper/PrismaTabMapper";
import { Prisma, TemplateTab as PrismaTab } from "../../../../generated/prisma";
import { Tab } from "../../../../domain/entities/Tab";
import { ITabRepository } from "../../../../domain/repositories/ITabRepository";
import { handlePrismaError } from "../errors/handlePrismaError";
import { RequirementFieldTabListItem } from "../../../../domain/read-models/requirementFields/RequirementFieldTabListItem"

@injectable()
export class TabRepository extends BaseRepository< Tab, PrismaTab, Prisma.TemplateTabCreateInput, Prisma.TemplateTabUpdateInput > implements ITabRepository {
  protected model = prisma.templateTab;

  protected toDomain( raw: PrismaTab ): Tab {
    return PrismaTabMapper.toDomain(raw);
  }

  protected toCreate( entity: Tab ): Prisma.TemplateTabCreateInput {
    return PrismaTabMapper.toCreatePersistence(entity);
  }

  protected toUpdate( entity: Tab ): Prisma.TemplateTabUpdateInput {
    return PrismaTabMapper.toUpdatePersistence(entity);
  }

  async findByTemplateAndName( templateId: string, name: string ): Promise<Tab | null> {
    return await this.findFirst({ 
      where: { templateId, name } 
    });
  }

  async existsDisplayOrder( templateId: string, displayOrder: number ): Promise<boolean> {
    return await this.exists({ templateId, displayOrder });
  }

  async findByTemplateAndDisplayOrder(templateId: string, displayOrder: number): Promise<Tab | null> {
    return await this.findFirst({
      where: {templateId, displayOrder}
    })
  } 

  async findTabsByTemplate( templateId: string): Promise<RequirementFieldTabListItem[]> {
    try {
      const rows = await this.model.findMany({
        where: {templateId, isActive: true},
        select: {
          id: true,
          name: true,
          displayOrder: true,
          isActive: true,
          _count: {select: {fields: {where: {isActive: true, deletedAt: null}}}}
        },
        orderBy: {name: "asc"}
      });
      return rows.map((row) => ({
        id: row.id,
        name: row.name,
        displayOrder: row.displayOrder,
        isActive: row.isActive,
        fieldCount: row._count.fields,
      }))
    } catch (error) {
      handlePrismaError(error)
    }
  }
}
