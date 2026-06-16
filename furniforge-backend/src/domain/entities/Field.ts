import { FieldType } from "../enums/FieldType";
import { IFieldPersistence } from "../types/IFieldPersistance";

export class Field {

  private constructor(
    private _id: string,
    private _tabId: string,
    private _label: string,
    private _fieldKey: string,
    private _fieldType: FieldType,
    private _options: string[],
    private _defaultValue: string | null,
    private _isActive: boolean,
    private _isRequired: boolean,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(data: {
    tabId: string;
    label: string;
    fieldKey: string;
    fieldType: FieldType;
    options?: string[];
    defaultValue: string | null;
    isRequired?: boolean;
  }) {
    return new Field(
      crypto.randomUUID(),
      data.tabId,
      data.label,
      data.fieldKey,
      data.fieldType,
      data.options ?? [],
      data.defaultValue ?? null,
      true,
      data.isRequired ?? false,
      new Date(),
      new Date()
    );
  }

  static fromPersistence(data: IFieldPersistence) {
    return new Field(
      data.id,
      data.tabId,
      data.label,
      data.fieldKey,
      data.fieldType,
      data.options,
      data.defaultValue ?? null,
      data.isActive,
      data.isRequired,
      data.createdAt,
      data.updatedAt
    );
  }

  get id() { return this._id; }
  get tabId() { return this._tabId; }
  get label() { return this._label; }
  get fieldKey() { return this._fieldKey; }
  get fieldType() { return this._fieldType; }
  get options() { return this._options; }
  get defaultValue(): string | null { return this._defaultValue; }
  get isActive() { return this._isActive; }
  get isRequired() { return this._isRequired; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
}