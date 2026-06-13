import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { ITemplateTabRepository } from "../../../../domain/repositories/ITemplateTabRepository";
import { PrismaTemplateTabMapper } from "../mapper/PrismaTemplateTabMapper";
import { Prisma, TemplateTab as PrismaTemplateTab } from "../../../../generated/prisma";
import { TemplateTab } from "../../../../domain/entities/TemplateTab";

@injectable()
export class TemplateTabRepository extends BaseRepository< TemplateTab, PrismaTemplateTab, Prisma.TemplateTabCreateInput, Prisma.TemplateTabUpdateInput > implements ITemplateTabRepository {
  protected model = prisma.templateTab;

  protected toDomain( raw: PrismaTemplateTab ): TemplateTab {
    return PrismaTemplateTabMapper.toDomain(raw);
  }

  protected toCreate( entity: TemplateTab ): Prisma.TemplateTabCreateInput {
    return PrismaTemplateTabMapper.toCreatePersistence(entity);
  }

  protected toUpdate( entity: TemplateTab ): Prisma.TemplateTabUpdateInput {
    return PrismaTemplateTabMapper.toUpdatePersistence(entity);
  }

  async findByTemplateAndName( templateId: string, name: string ): Promise<TemplateTab | null> {
    return await this.findFirst({ where: { templateId, name } });
  }

  async existsDisplayOrder( templateId: string, displayOrder: number ): Promise<boolean> {
    return await this.exists({ templateId, displayOrder });
  }
}
