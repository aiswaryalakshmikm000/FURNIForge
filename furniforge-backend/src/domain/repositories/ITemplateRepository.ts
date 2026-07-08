import { Template } from "../entities/Template";
import { RequirementFieldTemplateListItem } from "../read-models/requirementFields/RequirementFieldTemplateListItem";
import { TemplateListItem } from "../read-models/template/TemplateListItem";
import { IBaseRepository } from "./IBaseRepository";

export interface ITemplateRepository extends IBaseRepository<Template> {

  findAllTemplateRows(params: {
    skip: number;
    take: number;
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
    sortBy: "name" | "createdAt";
    sortOrder: "asc" | "desc";
  }): Promise<TemplateListItem[]>;

  countTemplates(filters?: {
    search?: string;
    status?: "ACTIVE" | "INACTIVE";
  }): Promise<number>;

  findByDeliverableAndName( deliverableId: string, name: string ): Promise<Template | null>;

  findTemplatesByDeliverable(deliverableId: string): Promise <RequirementFieldTemplateListItem[]>
}