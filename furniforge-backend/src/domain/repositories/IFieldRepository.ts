import { Field } from "../entities/Field";
import { RequirementFieldFieldListItem } from "../read-models/requirementFields/RequirementFieldFieldListItem";
import { IBaseRepository } from "./IBaseRepository";
import { Prisma } from "../../generated/prisma";

export interface IFieldRepository extends IBaseRepository<Field, Prisma.TemplateFieldWhereInput, Prisma.TemplateFieldFindManyArgs> {

  findByTabAndLabel( tabId: string, label: string ): Promise<Field | null>;

  findByTabAndFieldKey( tabId: string, fieldKey: string ): Promise<Field | null>;

  findFieldsByTab(tabId: string): Promise <RequirementFieldFieldListItem[]>
}