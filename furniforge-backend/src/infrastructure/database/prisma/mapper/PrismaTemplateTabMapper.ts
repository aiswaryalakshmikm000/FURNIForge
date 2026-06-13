import { Prisma, TemplateTab as PrismaTemplateTab } from "../../../../generated/prisma";
import { TemplateTab } from "../../../../domain/entities/TemplateTab";

export class PrismaTemplateTabMapper {

  static toDomain( raw: PrismaTemplateTab ): TemplateTab {
    return TemplateTab.fromPersistence({
      id: raw.id,
      templateId: raw.templateId,
      name: raw.name,
      displayOrder: raw.displayOrder,
      isActive: raw.isActive,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence( tab: TemplateTab ): Prisma.TemplateTabCreateInput {
    return {
      id: tab.id,
      name: tab.name,
      displayOrder: tab.displayOrder,

      template: {
        connect: {
          id: tab.templateId,
        },
      },
    };
  }

  static toUpdatePersistence( tab: TemplateTab ): Prisma.TemplateTabUpdateInput {
    return {
      name: tab.name,
      displayOrder: tab.displayOrder,
    };
  }
}