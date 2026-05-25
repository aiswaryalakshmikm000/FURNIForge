import { IBaseRepository } from "./IBaseRepository";
import { User } from "../entities/User";
import { DesignerListItem } from "../read-models/designer/DesignerListItem";

export interface IDesignerRepository extends IBaseRepository<User> {

  getNextDesignerSequence(): Promise<number>;

  countDesigners(filters?: {
    search?: string;
    status?: "ACTIVE" | "BLOCKED" | "INACTIVE";
  }): Promise<number>;

  findAllDesignerRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "BLOCKED" | "INACTIVE";
    sortBy: "rating" | "revenue" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<DesignerListItem[]>;

}


