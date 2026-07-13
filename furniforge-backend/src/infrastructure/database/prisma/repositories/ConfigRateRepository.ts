import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { IConfigRateRepository } from "../../../../domain/repositories/IConfigRateRepository";
import { ConfigRate } from "../../../../domain/entities/ConfigRate";
import { Prisma, ConfigRate as PrismaConfigRate } from "../../../../generated/prisma";
import { PrismaConfigRateMapper } from "../mapper/PrismaConfigRateMapper";
import { ConfigCategory, ConfigUnit} from "../../../../domain/enums/Config";
import { handlePrismaError } from "../errors/handlePrismaError";
import { ConfigRateListItem } from "../../../../domain/read-models/configRates/ConfigRateListItem";

@injectable()
export class ConfigRateRepository
  extends BaseRepository< ConfigRate, PrismaConfigRate, Prisma.ConfigRateCreateInput, Prisma.ConfigRateUpdateInput> implements IConfigRateRepository {
  protected model = prisma.configRate;

  protected toDomain(raw: PrismaConfigRate): ConfigRate {
    return PrismaConfigRateMapper.toDomain(raw);
  }

  protected toCreate(entity: ConfigRate): Prisma.ConfigRateCreateInput {
    return PrismaConfigRateMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: ConfigRate): Prisma.ConfigRateUpdateInput {
    return PrismaConfigRateMapper.toUpdatePersistence(entity);
  }

  // async save(configRate: ConfigRate): Promise<void> {
  //   try {
  //     await this.update(configRate.id, configRate);
  //   } catch (error) {
  //     handlePrismaError(error);
  //   }
  // }

  async findByItemName( itemName: string, category: ConfigCategory ): Promise<ConfigRate | null> {
    try {
      return await this.findFirst({
        where: { itemName, category },
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findAllConfigRates(params: { search?: string }): Promise<ConfigRateListItem[]> {
    try {
      const where: Prisma.ConfigRateWhereInput = {};

      if (params.search) {
        where.OR = [
          { itemName: { contains: params.search, mode: "insensitive" } },
          { brand: { contains: params.search, mode: "insensitive" } },
        ];
      }

      const rows = await this.model.findMany({
        where,
        orderBy: [ { category: "asc" }, { itemName: "asc" } ],
        select: {
          id: true,
          category: true,
          itemName: true,
          brand: true,
          rate: true,
          marginPercent: true,
          finalRate: true,
          unit: true,
          isActive: true,
          createdAt: true,
        },
      });

      return rows.map((row) => ({
        id: row.id,
        category: row.category as ConfigCategory,
        itemName: row.itemName,
        brand: row.brand,
        rate: Number(row.rate),
        marginPercent: Number(row.marginPercent),
        finalRate: Number(row.finalRate),
        unit: row.unit as ConfigUnit,
        isActive: row.isActive,
        createdAt: row.createdAt,
      }));
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
