import { ITemplatePersistence } from "../types/ITemplatePersistance";

export class Template {
  private constructor(
    private _id: string,
    private _deliverableId: string,
    private _name: string,
    private _description: string,
    private _isActive: boolean,
    private _createdById: string,
    private _deletedAt: Date | null,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(data: {
    deliverableId: string;
    name: string;
    description: string;
    createdById: string;
  }): Template {
    return new Template(
      crypto.randomUUID(),
      data.deliverableId,
      data.name,
      data.description,
      true,
      data.createdById,
      null,
      new Date(),
      new Date(),
    );
  }

  update( name: string, description: string ) {
    this._name = name;
    this._description = description;
    this._updatedAt = new Date();
  }

  toggleStatus() {
    this._isActive = !this._isActive;
    this._updatedAt = new Date();
  }

  softDelete() {
    this._isActive = false;
    this._deletedAt = new Date();
    this._updatedAt = new Date();
  }

  restore() {
    this._deletedAt = null;
    this._updatedAt = new Date();
  }

  static fromPersistence(
    data: ITemplatePersistence,
  ): Template {
    return new Template(
      data.id,
      data.deliverableId,
      data.name,
      data.description,
      data.isActive,
      data.createdById,
      data.deletedAt,
      data.createdAt,
      data.updatedAt,
    );
  }

  get id() { return this._id; }
  get deliverableId() { return this._deliverableId; }
  get name() { return this._name; }
  get description() { return this._description; }
  get isActive() { return this._isActive; }
  get createdById() { return this._createdById; }
  get deletedAt() { return this._deletedAt; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
}