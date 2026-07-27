import { Deliverable } from "../entities/Deliverable";
import { DeliverableListItem } from "../read-models/deliverable/DeliverableListItem";
import { RequirementFieldDeliverableListItem } from "../read-models/requirementFields/RequirementFieldDeliverableListItem";
import { IBaseRepository } from "./IBaseRepository";
import { Prisma } from "../../generated/prisma";
import { DeliverableOptionsListItem } from "../read-models/deliverable/DeliverableOptionsListItem";

export interface IDeliverableRepository extends IBaseRepository<Deliverable, Prisma.DeliverableWhereInput, Prisma.DeliverableFindManyArgs> {

  findAllDeliverableRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
    sortBy: "name" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<DeliverableListItem[]>;

  countDeliverables(filters?: {
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
  }): Promise<number>;

  findByName(name: string): Promise<Deliverable | null>;

  findRequirementFieldDeliverables( search?: string ): Promise<RequirementFieldDeliverableListItem[]>;

  findActiveDeliverableOptions(): Promise<DeliverableOptionsListItem[]>;

  findManyByNames(names: string[]): Promise<DeliverableOptionsListItem[]>;
}