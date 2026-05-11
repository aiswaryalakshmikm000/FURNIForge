import { IBaseRepository } from "./IBaseRepository.js";
import { Lead } from "../entities/Lead.js";
import { Prisma } from "../../generated/prisma/index.js";

type LeadWithClient = Prisma.LeadGetPayload<{
  include: {
    client: true;
  };
}>;


export interface ILeadRepository extends IBaseRepository<Lead> {
  findByLeadRegNo(leadRegNo: string): Promise<Lead | null>;

  getNextLeadSequence(): Promise<number>;

  findAllLeads(params: {
    skip: number;
    take: number;
    search?: string;
    status?: string;
    source?: string;
  }): Promise<Lead[]>;

  countLeads(filters?: {
    search?: string;
    status?: string;
    source?: string;
  }): Promise<number>;

  findAllLeadRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: string;
    source?: string;
    sortOrder: "asc" | "desc";
  }): Promise<LeadWithClient[]>;

}
