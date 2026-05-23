import { IBaseRepository } from "./IBaseRepository";
import { Lead } from "../entities/Lead";
import { LeadListItem } from "../read-models/lead/LeadListItems";

export interface ILeadRepository extends IBaseRepository<Lead> {
  findByLeadRegNo(leadRegNo: string): Promise<Lead | null>;

  getNextLeadSequence(): Promise<number>;

  countLeads(filters?: {
    search?: string;
    status?: string;
    source?: string;
    deliverable?: string;
  }): Promise<number>;

  findAllLeadRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: string;
    source?: string;
    deliverable?: string;
    sortOrder: "asc" | "desc";
  }): Promise<LeadListItem[]>;

}
