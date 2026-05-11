import prisma from "../client.js";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository.js";
import { Lead } from "../../../../domain/entities/Lead.js";
import { ILeadRepository } from "../../../../domain/repositories/ILeadRepository.js";
import { LeadMapper } from "../../../../application/mappers/LeadMapper.js";
import { Prisma, Lead as PrismaLead } from "../../../../generated/prisma/index.js";

@injectable()
export class LeadRepository extends BaseRepository< Lead, PrismaLead, Prisma.LeadCreateInput, Prisma.LeadUpdateInput > implements ILeadRepository {
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
      where: {
        leadRegNo,
      },
    });

    return raw ? this.toDomain(raw) : null;
  }

  async getNextLeadSequence(): Promise<number> {
    const counter = await prisma.counter.update({
      where: {
        id: "lead",
      },

      data: {
        value: {
          increment: 1,
        },
      },
    });

    console.log("counter.id", counter.id)
    return counter.value;
  }
}
