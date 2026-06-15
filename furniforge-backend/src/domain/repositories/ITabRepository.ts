import { Tab } from "../entities/Tab";
import { IBaseRepository } from "./IBaseRepository";

export interface ITabRepository extends IBaseRepository<Tab> {

  findByTemplateAndName( templateId: string, name: string ): Promise<Tab | null>;

  existsDisplayOrder( templateId: string, displayOrder: number ): Promise<boolean>;
  
  findByTemplateAndDisplayOrder(templateId: string, displayOrder: number): Promise<Tab | null>
}