import { Prisma, TemplateTab as PrismaTemplateTab } from "../../../../generated/prisma";
import { Tab } from "../../../../domain/entities/Tab";

export class PrismaTabMapper {

  static toDomain( raw: PrismaTemplateTab ): Tab {
    return Tab.fromPersistence({
      id: raw.id,
      templateId: raw.templateId,
      name: raw.name,
      displayOrder: raw.displayOrder,
      isActive: raw.isActive,
      deletedAt: raw.deletedAt,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence( tab: Tab ): Prisma.TemplateTabCreateInput {
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

  static toUpdatePersistence( tab: Tab ): Prisma.TemplateTabUpdateInput {
    return {
      name: tab.name,
      displayOrder: tab.displayOrder,
      isActive: tab.isActive,
      deletedAt: tab.deletedAt,
    };
  }
}