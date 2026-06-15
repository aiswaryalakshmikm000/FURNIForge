import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { PrismaTabMapper } from "../mapper/PrismaTabMapper";
import { Prisma, TemplateTab as PrismaTab } from "../../../../generated/prisma";
import { Tab } from "../../../../domain/entities/Tab";
import { ITabRepository } from "../../../../domain/repositories/ITabRepository";

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
}
