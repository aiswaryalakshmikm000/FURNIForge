import { injectable } from "inversify";
import prisma from "../client";
import { BaseRepository } from "./BaseRepository";
import { IConfigRateRepository } from "../../../../domain/repositories/IConfigRateRepository";
import { ConfigRate } from "../../../../domain/entities/ConfigRate";
import { Prisma, ConfigRate as PrismaConfigRate } from "../../../../generated/prisma";
import { PrismaConfigRateMapper } from "../mapper/PrismaConfigRateMapper";
import { ConfigCategory } from "../../../../domain/enums/Config";

@injectable()
export class ConfigRateRepository extends BaseRepository< ConfigRate, PrismaConfigRate, Prisma.ConfigRateCreateInput, Prisma.ConfigRateUpdateInput > implements IConfigRateRepository {
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

  async findAllConfigRates(params: {
    search?: string;
  }): Promise<ConfigRate[]> {
    const where: Prisma.ConfigRateWhereInput = {
      ...(params.search && {
        OR: [
          {
            itemName: {
              contains: params.search,
              mode: "insensitive",
            },
          },

          {
            brand: {
              contains: params.search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    return this.findAll({
      where,
      orderBy: [
        {
          category: "asc",
        },
        {
          itemName: "asc",
        },
      ],
    });
  }

  async findById(id: string): Promise<ConfigRate | null> {
    return super.findById(id);
  }

  async save(configRate: ConfigRate): Promise<void> {
    await super.update(configRate.id, configRate);
  }

  async findByItemName(
    itemName: string,
    category: ConfigCategory,
  ): Promise<ConfigRate | null> {
    return this.findFirst({
      where: {
        itemName,
        category,
      },
    });
  }
}
