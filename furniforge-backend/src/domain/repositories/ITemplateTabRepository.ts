import { TemplateTab } from "../entities/TemplateTab";
import { IBaseRepository } from "./IBaseRepository";

export interface ITemplateTabRepository extends IBaseRepository<TemplateTab> {

  findByTemplateAndName( templateId: string, name: string ): Promise<TemplateTab | null>;

  existsDisplayOrder( templateId: string, displayOrder: number ): Promise<boolean>;
  
}