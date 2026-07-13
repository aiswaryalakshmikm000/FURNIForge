import { Prisma, ConfigRate as PrismaConfigRate } from "../../../../generated/prisma";
import { ConfigRate } from "../../../../domain/entities/ConfigRate";
import { ConfigCategory, ConfigUnit } from "../../../../domain/enums/Config";

export class PrismaConfigRateMapper {

  static toDomain(raw: PrismaConfigRate): ConfigRate {
    return ConfigRate.fromPersistence({
      id: raw.id,
      category: raw.category as ConfigCategory,
      itemName: raw.itemName,
      brand: raw.brand,
      rate: Number(raw.rate),
      marginPercent: Number(raw.marginPercent),
      finalRate: Number(raw.finalRate),
      unit: raw.unit as ConfigUnit,
      isActive: raw.isActive,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence( entity: ConfigRate ): Prisma.ConfigRateCreateInput {
    return {
      id: entity.id,
      category: entity.category,
      itemName: entity.itemName,
      brand: entity.brand,
      rate: entity.rate,
      marginPercent: entity.marginPercent,
      finalRate: entity.finalRate,
      unit: entity.unit,
      isActive: entity.isActive,
    };
  }

  static toUpdatePersistence( entity: ConfigRate ): Prisma.ConfigRateUpdateInput {
    return {
      category: entity.category,
      itemName: entity.itemName,
      brand: entity.brand,
      rate: entity.rate,
      marginPercent: entity.marginPercent,
      finalRate: entity.finalRate,
      unit: entity.unit,
      isActive: entity.isActive,
    };
  }

}