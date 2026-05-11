import { IBaseRepository } from "./IBaseRepository.js";
import { Lead } from "../entities/Lead.js";

export interface ILeadRepository extends IBaseRepository<Lead> {
  findByLeadRegNo(leadRegNo: string): Promise<Lead | null>;
  getNextLeadSequence(): Promise<number>;
}