import { ITabPersistence } from "../types/ITabPersistance";

export class Tab {

  private constructor(
    private _id: string,
    private _templateId: string,
    private _name: string,
    private _displayOrder: number,
    private _isActive: Boolean,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(data: {
    templateId: string;
    name: string;
    displayOrder: number;
  }) {
    return new Tab(
      crypto.randomUUID(),
      data.templateId,
      data.name,
      data.displayOrder,
      true,
      new Date(),
      new Date(),
    );
  }

  update( name: string, displayOrder: number ) {
    this._name = name;
    this._displayOrder = displayOrder;
    this._updatedAt = new Date();
  }

  toggleSatus() {
    this._isActive = !this._isActive,
    this._updatedAt = new Date()
  }

  static fromPersistence( data: ITabPersistence ) {
    return new Tab(
      data.id,
      data.templateId,
      data.name,
      data.displayOrder,
      data.isActive,
      data.createdAt,
      data.updatedAt,
    );
  }

  get id() { return this._id; }
  get templateId() { return this._templateId; }
  get name() { return this._name; }
  get displayOrder() { return this._displayOrder; }
  get isActive() { return this._isActive; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
}