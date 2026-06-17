import { Field } from "../entities/Field";
import { IBaseRepository } from "./IBaseRepository";

export interface IFieldRepository extends IBaseRepository<Field> {

  findByTabAndLabel( tabId: string, label: string ): Promise<Field | null>;

  findByTabAndFieldKey( tabId: string, fieldKey: string ): Promise<Field | null>;
}