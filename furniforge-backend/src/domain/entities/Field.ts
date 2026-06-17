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
    private _deletedAt: Date | null,
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
      null,
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
      data.deletedAt,
      data.createdAt,
      data.updatedAt
    );
  }

  update(data: {
    label: string;
    fieldKey: string;
    fieldType: FieldType;
    options: string[];
    defaultValue: string | null;
    isRequired: boolean;
  }) {
    this._label = data.label;
    this._fieldKey = data.fieldKey;
    this._fieldType = data.fieldType;
    this._options = data.options;
    this._defaultValue = data.defaultValue;
    this._isRequired = data.isRequired;
    this._updatedAt = new Date();
  }

  softDelete() {
    this._deletedAt = new Date();
    this._isActive = false;
    this._updatedAt = new Date();
  }

  get id() { return this._id }
  get tabId() { return this._tabId }
  get label() { return this._label }
  get fieldKey() { return this._fieldKey }
  get fieldType() { return this._fieldType }
  get options() { return this._options }
  get defaultValue(): string | null { return this._defaultValue }
  get isActive() { return this._isActive }
  get isRequired() { return this._isRequired }
  get deletedAt() { return this._deletedAt }
  get createdAt() { return this._createdAt }
  get updatedAt() { return this._updatedAt }
}