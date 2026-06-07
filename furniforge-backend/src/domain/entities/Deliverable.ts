import { IDeliverablePersistence } from "../types/IDeliverablePersistence";

export class Deliverable {
  private constructor(
    private _id: string,
    private _name: string,
    private _description: string,
    private _icon: string,
    private _isActive: boolean,
    private _createdById: string,
    private _deletedAt: Date | null,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(data: {
    name: string;
    description: string;
    icon: string;
    createdById: string;
  }): Deliverable {
    return new Deliverable(
      crypto.randomUUID(),
      data.name,
      data.description,
      data.icon,
      true,
      data.createdById,
      null,
      new Date(),
      new Date(),
    );
  }

  update( name: string, description: string, icon: string ) {
    this._name = name;
    this._description = description;
    this._icon = icon;
    this._updatedAt = new Date();
  }

  toggleStatus() {
    this._isActive = !this._isActive;
    this._updatedAt = new Date();
  }

  softDelete() {
    this._deletedAt = new Date();
    this._updatedAt = new Date();
  }

  static fromPersistence( data: IDeliverablePersistence ): Deliverable {
    return new Deliverable(
      data.id,
      data.name,
      data.description,
      data.icon,
      data.isActive,
      data.createdById,
      data.deletedAt,
      data.createdAt,
      data.updatedAt,
    );
  }

  get id() { return this._id; } 
  get name() { return this._name; }
  get description() { return this._description; }
  get icon() { return this._icon; }
  get isActive() { return this._isActive; }
  get createdById() { return this._createdById; }
  get deletedAt() { return this._deletedAt; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
}