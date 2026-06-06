import { Deliverable } from "../../../../domain/entities/Deliverable";
import { Prisma, Deliverable as PrismaDeliverable } from "../../../../generated/prisma";

export class PrismaDeliverableMapper {
  static toDomain(
    raw: PrismaDeliverable,
  ): Deliverable {
    return Deliverable.fromPersistence({
      id: raw.id,
      name: raw.name,
      description: raw.description,
      icon: raw.icon,
      isActive: raw.isActive,
      createdById: raw.createdById,
      deletedAt: raw.deletedAt,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence(
    deliverable: Deliverable,
  ): Prisma.DeliverableCreateInput {
    return {
      id: deliverable.id,
      name: deliverable.name,
      description: deliverable.description,
      icon: deliverable.icon,
      isActive: deliverable.isActive,

      createdBy: {
        connect: {
          id: deliverable.createdById,
        },
      },
    };
  }

  static toUpdatePersistence(
    deliverable: Deliverable,
  ): Prisma.DeliverableUpdateInput {
    return {
      name: deliverable.name,
      description: deliverable.description,
      icon: deliverable.icon,
      isActive: deliverable.isActive,
      deletedAt: deliverable.deletedAt,
    };
  }
}