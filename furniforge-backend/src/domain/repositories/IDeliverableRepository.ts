import { Deliverable } from "../entities/Deliverable";
import { DeliverableListItem } from "../read-models/deliverable/DeliverableMapper";
import { IBaseRepository } from "./IBaseRepository";

export interface IDeliverableRepository extends IBaseRepository<Deliverable> {

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
}