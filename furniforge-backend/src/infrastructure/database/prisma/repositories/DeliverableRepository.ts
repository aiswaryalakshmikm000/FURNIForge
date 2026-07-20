import prisma from "../client";
import { injectable } from "inversify";
import { Prisma, Deliverable as PrismaDeliverable } from "../../../../generated/prisma";
import { BaseRepository } from "./BaseRepository";
import { handlePrismaError } from "../errors/handlePrismaError";
import { Deliverable } from "../../../../domain/entities/Deliverable";
import { IDeliverableRepository } from "../../../../domain/repositories/IDeliverableRepository";
import { DeliverableListItem } from "../../../../domain/read-models/deliverable/DeliverableListItem";
import { PrismaDeliverableMapper } from "../mapper/PrismaDeliverableMapper";
import { RequirementFieldDeliverableListItem } from "../../../../domain/read-models/requirementFields/RequirementFieldDeliverableListItem";

@injectable()
export class DeliverableRepository extends BaseRepository< Deliverable, PrismaDeliverable, Prisma.DeliverableCreateInput, Prisma.DeliverableUpdateInput > implements IDeliverableRepository {
  protected model = prisma.deliverable;

  protected toDomain(raw: PrismaDeliverable): Deliverable {
    return PrismaDeliverableMapper.toDomain(raw);
  }

  protected toCreate(entity: Deliverable): Prisma.DeliverableCreateInput {
    return PrismaDeliverableMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Deliverable): Prisma.DeliverableUpdateInput {
    return PrismaDeliverableMapper.toUpdatePersistence(entity);
  }

  async countDeliverables(filters?: {
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
  }): Promise<number> {
    try {
      const where: Prisma.DeliverableWhereInput = { deletedAt: null };

      if (filters?.search) {
        where.OR = [
          { name: { contains: filters.search, mode: "insensitive" } },
          { description: { contains: filters.search, mode: "insensitive" } },
        ];
      }

      if (filters?.status === "ACTIVE") {
        where.isActive = true;
      }

      if (filters?.status === "INACTIVE") {
        where.isActive = false;
      }

      return await this.model.count({ where });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findAllDeliverableRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
    sortBy: "name" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<DeliverableListItem[]> {
    try {
      const where: Prisma.DeliverableWhereInput = {};

      if (params.search) {
        where.OR = [
          { name: { contains: params.search, mode: "insensitive" } },
          { description: { contains: params.search, mode: "insensitive" } },
        ];
      }

      if (params.status === "ACTIVE") {
        where.isActive = true;
      }

      if (params.status === "INACTIVE") {
        where.isActive = false;
      }

      let orderBy: Prisma.DeliverableOrderByWithRelationInput = {
        createdAt: params.sortOrder,
      };

      if (params.sortBy === "name") {
        orderBy = { name: params.sortOrder };
      }

      const raws = await this.model.findMany({
        where,
        skip: params.skip,
        take: params.take,
        orderBy,
        select: {
          id: true,
          name: true,
          description: true,
          icon: true,
          isActive: true,
          createdAt: true,
        },
      });

      return raws.map((raw) => ({
        id: raw.id,
        name: raw.name,
        description: raw.description,
        icon: raw.icon,
        isActive: raw.isActive,
        createdAt: raw.createdAt,
      }));
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findByName(name: string): Promise<Deliverable | null> {
    try {
      return await this.findFirst({where: {name, deletedAt: null}});
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findRequirementFieldDeliverables(search?: string): Promise<RequirementFieldDeliverableListItem[]> {
    try {
      const rows = await this.model.findMany({
        where: {deletedAt: null,
        ...(search && { OR: [
          {name: {contains: search, mode: "insensitive"}},
          {templates: {some: {deletedAt: null, name: {contains: search, mode: "insensitive"}}},}
          ]})},
        select: {
          id: true,
          name: true,
          description: true,
          isActive: true,
          _count: {select: {templates: {where: { deletedAt: null, isActive: true }}}}
        },
        orderBy: { name: "asc" }
      });
      return rows.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        isActive: row.isActive,
        templateCount: row._count.templates,
      }));
    } catch (error) {
      handlePrismaError(error);
    } 
  }
}
