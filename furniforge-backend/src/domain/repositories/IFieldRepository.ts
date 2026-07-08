import { Field } from "../entities/Field";
import { RequirementFieldFieldListItem } from "../read-models/requirementFields/RequirementFieldFieldListItem";
import { IBaseRepository } from "./IBaseRepository";

export interface IFieldRepository extends IBaseRepository<Field> {

  findByTabAndLabel( tabId: string, label: string ): Promise<Field | null>;

  findByTabAndFieldKey( tabId: string, fieldKey: string ): Promise<Field | null>;

  findFieldsByTab(tabId: string): Promise <RequirementFieldFieldListItem[]>
}