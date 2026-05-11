import prisma from "../client.js";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository.js";
import { Lead } from "../../../../domain/entities/Lead.js";
import { ILeadRepository } from "../../../../domain/repositories/ILeadRepository.js";
import { LeadMapper } from "../../../../application/mappers/LeadMapper.js";
import { Prisma, Lead as PrismaLead } from "../../../../generated/prisma/index.js";

type LeadWithClient = Prisma.LeadGetPayload<{
  include: {
    client: true;
  };
}>;

@injectable()
export class LeadRepository
  extends BaseRepository< Lead, PrismaLead, Prisma.LeadCreateInput, Prisma.LeadUpdateInput > implements ILeadRepository {

  protected model = prisma.lead;

  protected toDomain(raw: PrismaLead): Lead {
    return LeadMapper.toDomain(raw);
  }

  protected toCreate(entity: Lead): Prisma.LeadCreateInput {
    return LeadMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Partial<Lead>): Prisma.LeadUpdateInput {
    return LeadMapper.toUpdatePersistence(entity);
  }

  async findByLeadRegNo(leadRegNo: string): Promise<Lead | null> {
    const raw = await this.model.findUnique({
      where: { leadRegNo },
    });

    return raw ? this.toDomain(raw) : null;
  }

  async getNextLeadSequence(): Promise<number> {
    const counter = await prisma.counter.update({
      where: { id: "lead" },
      data: { value: { increment: 1 } },
    });

    return counter.value;
  }

  async findAllLeads(params: {
    skip: number;
    take: number;
    search?: string;
    status?: string;
    source?: string;
  }): Promise<Lead[]> {
    const where: Prisma.LeadWhereInput = {
      AND: [
        params.search
          ? {
              OR: [
                { name: { contains: params.search, mode: "insensitive" } },
                { email: { contains: params.search, mode: "insensitive" } },
                { phone: { contains: params.search } },
              ],
            }
          : {},

        params.status ? { status: params.status as any } : {}, // i dont need any in this..

        params.source ? { source: params.source as any } : {},
      ],
    };

    const raws = await this.model.findMany({
      where,
      skip: params.skip,
      take: params.take,
      include: { client: true },
      orderBy: { createdAt: "desc" },
    });

    return raws.map((raw) => this.toDomain(raw));
  }

  async countLeads(filters?: {
    search?: string;
    status?: string;
    source?: string;
  }): Promise<number> {
    const where: Prisma.LeadWhereInput = {
      AND: [
        filters?.search
          ? {
              OR: [
                {
                  name: {
                    contains: filters.search,
                    mode: "insensitive",
                  },
                },
                {
                  email: {
                    contains: filters.search,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {},

        filters?.status
          ? {
              status: filters.status as any,
            }
          : {},

        filters?.source
          ? {
              source: filters.source as any,
            }
          : {},
      ],
    };

    return this.model.count({ where });
  }

  async findAllLeadRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: string;
    source?: string;
    sortOrder: "asc" | "desc";
  }): Promise<LeadWithClient[]> {
    const where: Prisma.LeadWhereInput = {
      AND: [
        params.search
          ? {
              OR: [
                {
                  name: {
                    contains: params.search,
                    mode: "insensitive",
                  },
                },
                {
                  email: {
                    contains: params.search,
                    mode: "insensitive",
                  },
                },
                {
                  phone: {
                    contains: params.search,
                  },
                },
              ],
            }
          : {},

        params.status
          ? {
              status: params.status as Prisma.EnumLeadStatusFilter["equals"],
            }
          : {},

        params.source
          ? {
              source: params.source as Prisma.EnumLeadSourceFilter["equals"],
            }
          : {},
      ],
    };

    return this.model.findMany({
      where,
      skip: params.skip,
      take: params.take,

      include: {
        client: true,
      },

      orderBy: {
        createdAt: params.sortOrder,
      },
    });
  }
}
