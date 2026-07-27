import { IBaseRepository } from "./IBaseRepository";
import { User } from "../entities/User";
import { DesignerListItem } from "../read-models/designer/DesignerListItem";
import { Prisma } from "../../generated/prisma";

export interface IDesignerRepository extends IBaseRepository<User, Prisma.UserWhereInput, Prisma.UserFindManyArgs> {

  getNextDesignerSequence(): Promise<number>;

  countDesigners(filters?: {
    search?: string;
    status?: "ACTIVE" | "BLOCKED" | "PENDING";
  }): Promise<number>;

  findAllDesignerRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "BLOCKED" | "PENDING";
    sortBy: "rating" | "projects" | "revenue" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<DesignerListItem[]>;

}


