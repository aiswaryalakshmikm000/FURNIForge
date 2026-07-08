import prisma from "../client";
import { injectable } from "inversify";
import { Prisma, Template as PrismaTemplate } from "../../../../generated/prisma";
import { BaseRepository } from "./BaseRepository";
import { handlePrismaError } from "../errors/handlePrismaError";
import { Template } from "../../../../domain/entities/Template";
import { PrismaTemplateMapper } from "../mapper/PrismaTemplateMapper";
import { TemplateListItem } from "../../../../domain/read-models/template/TemplateListItem";
import { ITemplateRepository } from "../../../../domain/repositories/ITemplateRepository";
import { RequirementFieldTemplateListItem } from "../../../../domain/read-models/requirementFields/RequirementFieldTemplateListItem";

@injectable()
export class TemplateRepository extends BaseRepository< Template, PrismaTemplate, Prisma.TemplateCreateInput, Prisma.TemplateUpdateInput > implements ITemplateRepository {
  protected model = prisma.template;

  protected toDomain(raw: PrismaTemplate): Template {
    return PrismaTemplateMapper.toDomain(raw);
  }

  protected toCreate(entity: Template): Prisma.TemplateCreateInput {
    return PrismaTemplateMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Template): Prisma.TemplateUpdateInput {
    return PrismaTemplateMapper.toUpdatePersistence(entity);
  }

  async countTemplates(filters?: {
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
  }): Promise<number> {
    try {
      const where: Prisma.TemplateWhereInput = { deletedAt: null };

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

  async findAllTemplateRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
    sortBy: "name" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<TemplateListItem[]> {
    try {
      const where: Prisma.TemplateWhereInput = {
        deletedAt: null,
      };

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

      let orderBy: Prisma.TemplateOrderByWithRelationInput = {
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
          deliverableId: true,
          description: true,
          isActive: true,
          createdAt: true,
        },
      });

      return raws.map((raw) => ({
        id: raw.id,
        name: raw.name,
        deliverableId: raw.deliverableId,
        description: raw.description,
        isActive: raw.isActive,
        createdAt: raw.createdAt,
      }));
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findByDeliverableAndName( deliverableId: string, name: string ): Promise<Template | null> {
    try {
      return await this.findFirst({
        where: { deliverableId, name},
      });
    } catch (error) {
      handlePrismaError(error)
    }
  }

  async findTemplatesByDeliverable(deliverableId: string): Promise<RequirementFieldTemplateListItem[]> {
    try {
      const rows = await this.model.findMany({
        where: {deliverableId, deletedAt: null},
        select: {
          id: true,
          name: true,
          description: true,
          isActive: true,
          _count: {select: {tabs: {where: {deletedAt: null, isActive: true}}}},
          tabs: {
            where: {deletedAt: null, isActive: true}, 
            select: {_count: {select: {fields: {where: {deletedAt: null, isActive: true}}}}}
          }
        },
        orderBy: {name: "asc"}
      });
      return rows.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        isActive: row.isActive,
        tabCount: row._count.tabs,
        fieldCount: row.tabs.reduce((total, tab) => total + tab._count.fields, 0)
      }));
    } catch (error) {
      handlePrismaError(error)
    }
  }

}
