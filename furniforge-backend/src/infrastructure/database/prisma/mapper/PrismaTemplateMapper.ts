import { Template } from "../../../../domain/entities/Template";
import { Prisma, Template as PrismaTemplate } from "../../../../generated/prisma";

export class PrismaTemplateMapper {
  static toDomain( raw: PrismaTemplate ): Template {
    return Template.fromPersistence({
      id: raw.id,
      deliverableId: raw.deliverableId,
      name: raw.name,
      description: raw.description,
      isActive: raw.isActive,
      createdById: raw.createdById,
      deletedAt: raw.deletedAt,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence( template: Template ): Prisma.TemplateCreateInput {
    return {
      id: template.id,
      name: template.name,
      description: template.description,
      isActive: template.isActive,
      deliverable: {
        connect: {id: template.deliverableId},
      },
      createdBy: {
        connect: { id: template.createdById },
      },
    };
  }

  static toUpdatePersistence( template: Template ): Prisma.TemplateUpdateInput {
    return {
      name: template.name,
      description: template.description,
      isActive: template.isActive,
      deletedAt: template.deletedAt,
    };
  }
}