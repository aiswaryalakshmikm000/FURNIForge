import prisma from "../client";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository";
import { Lead } from "../../../../domain/entities/Lead";
import type { ILeadRepository } from "../../../../domain/repositories/ILeadRepository";
import { PrismaLeadMapper } from "../mapper/PrismaLeadMapper";
import { LeadSource, LeadStatus, PackageType} from "../../../../domain/enums/Lead";
import { Prisma, Lead as PrismaLead} from "../../../../generated/prisma/index";
import { LeadListItem } from "../../../../domain/read-models/lead/LeadListItems";
import { handlePrismaError } from "../errors/handlePrismaError";

@injectable()
export class LeadRepository
  extends BaseRepository< Lead, PrismaLead, Prisma.LeadCreateInput, Prisma.LeadUpdateInput > implements ILeadRepository {
  protected model = prisma.lead;

  protected toDomain(raw: PrismaLead): Lead {
    return PrismaLeadMapper.toDomain(raw);
  }

  protected toCreate(entity: Lead): Prisma.LeadCreateInput {
    return PrismaLeadMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Lead): Prisma.LeadUpdateInput {
    return PrismaLeadMapper.toUpdatePersistence(entity);
  }

  async findByLeadRegNo(leadRegNo: string): Promise<Lead | null> {
    try {
      const raw = await this.model.findUnique({ where: { leadRegNo } });
      return raw ? this.toDomain(raw) : null;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async getNextLeadSequence(): Promise<number> {
    try {
      const counter = await prisma.counter.update({
        where: { id: "lead" },
        data: { value: { increment: 1 } },
      });
      return counter.value;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async countLeads(filters?: {
    search?: string;
    status?: string;
    source?: string;
    deliverable?: string;
  }): Promise<number> {
    try {
      const where: Prisma.LeadWhereInput = {
        AND: [
          filters?.search ? { OR: [
                  { name: { contains: filters.search, mode: "insensitive" } },
                  { email: { contains: filters.search, mode: "insensitive" } },
                ] } : {},
          filters?.status ? { status: filters.status as LeadStatus } : {},
          filters?.source ? { source: filters.source as LeadSource } : {},
          filters?. deliverable ? { projectsInterestedIn: {has: filters.deliverable}} : {}
        ],
      };

      return this.model.count({ where });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findAllLeadRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: string;
    source?: string;
    deliverable?: string;
    sortOrder: "asc" | "desc";
  }): Promise<LeadListItem[]> {
    try {
      const where: Prisma.LeadWhereInput = {
        AND: [
          params.search ? { OR: [
                  { name: { contains: params.search, mode: "insensitive" } },
                  { email: { contains: params.search, mode: "insensitive" } },
                  { phone: { contains: params.search } },
                ] } : {},
          params.status ? { status: params.status as Prisma.EnumLeadStatusFilter["equals"] } : {},
          params.source ? { source: params.source as Prisma.EnumLeadSourceFilter["equals"] } : {},
          params.deliverable ? { projectsInterestedIn: {has: params.deliverable}} : {}
        ],
      };

      const raws = await this.model.findMany({
        where,
        skip: params.skip,
        take: params.take,
        orderBy: { createdAt: params.sortOrder },
        select: {
          id: true, 
          leadRegNo: true, 
          name: true, 
          email: true, 
          phone: true, 
          source: true, 
          status: true, 
          projectsInterestedIn: true, 
          packageType: true,
          createdAt: true, 
          client: { select: {address: true, avatar: true}},
          assignedDesigner: { select: { firstName: true, lastName: true}}
        }
      });

      return raws.map((raw) => {
        let location: string | null = null;

        if (
          raw.client?.address && typeof raw.client.address === "object" && !Array.isArray(raw.client.address)
        ) {
          const address = raw.client.address as { city?: string; state: string};
          location = [address.city, address.state].filter(Boolean).join(", ") || null
        }

        const assignedDesignerName = raw.assignedDesigner ? `${raw.assignedDesigner.firstName} ${raw.assignedDesigner.lastName}` : null

        return {
          id: raw.id,
          leadRegNo: raw.leadRegNo,
          name: raw.name,
          email: raw.email,
          phone: raw.phone,
          location,
          avatar: raw.client?.avatar || null,
          source: raw.source as LeadSource,
          status: raw.status as LeadStatus,
          projectsInterestedIn: raw.projectsInterestedIn,
          packageType: raw.packageType ? (raw.packageType as PackageType) : null,
          assignedDesignerName,
          createdAt: raw.createdAt,
        };
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
