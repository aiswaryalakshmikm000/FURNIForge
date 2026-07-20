import { ERROR_MESSAGES } from "../../infrastructure/config/messages";
import { ConfigCategory, ConfigUnit } from "../enums/Config";
import { BadRequestError } from "../errors/AppError";
import { IConfigRatePersistence } from "../types/IConfigRatePersistence";

export class ConfigRate {
  private constructor(
    private _id: string,
    private _category: ConfigCategory,
    private _itemName: string,
    private _brand: string,
    private _rate: number,
    private _marginPercent: number,
    private _finalRate: number,
    private _unit: ConfigUnit,
    private _isActive: boolean,
    private _deletedAt: Date | null,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(data: {
    category: ConfigCategory,
    itemName: string,
    brand: string,
    rate:  number,
    marginPercent: number,
    unit: ConfigUnit,
  }): ConfigRate{
    const finalRate = Number(( data.rate + (data.rate * data.marginPercent) / 100).toFixed(2));

    return new ConfigRate(
        crypto.randomUUID(),
        data.category,
        data.itemName,
        data.brand,
        data.rate,
        data.marginPercent,
        finalRate,
        data.unit,
        true,
        null,
        new Date(),
        new Date(),
    )
  }

  update(data:{
    itemName:string;
    brand:string;
    rate:number;
    marginPercent:number;
    unit:ConfigUnit;
  }){
    this._itemName = data.itemName;
    this._brand = data.brand;
    this._rate = data.rate;
    this._marginPercent = data.marginPercent;
    this._finalRate = Number(( data.rate + (data.rate * data.marginPercent) / 100 ).toFixed(2));
    this._unit = data.unit;
    this._updatedAt = new Date();
  }
  
  static fromPersistence(data: IConfigRatePersistence): ConfigRate{
    return new ConfigRate(
      data.id,
      data.category,
      data.itemName,
      data.brand,
      Number(data.rate),
      Number(data.marginPercent),
      Number(data.finalRate),
      data.unit,
      data.isActive,
      data.deletedAt,
      data.createdAt,
      data.updatedAt,
    );
  }

  toggleStatus() {
    if(this._deletedAt) throw new BadRequestError(ERROR_MESSAGES.ADMIN.CONFIG_RATE.DELETE_BANNED)
    this._isActive = !this._isActive;
    this._updatedAt = new Date();
  }

  softDelete() {
    this._deletedAt= new Date();
    this._isActive = false;
    this._updatedAt= new Date()
  }

  restore() {
    this._deletedAt = null;
    this._isActive = true;
    this._updatedAt = new Date();
}

  get id() { return this._id}
  get category() { return this._category}
  get itemName() { return this._itemName}
  get brand() { return this._brand}
  get rate() { return this._rate}
  get marginPercent() { return this._marginPercent}
  get finalRate() { return this._finalRate}
  get unit() { return this._unit}
  get isActive() { return this._isActive}
  get deletedAt() { return this._deletedAt}
  get createdAt() { return this._createdAt}
  get updatedAt() { return this._updatedAt}
}
