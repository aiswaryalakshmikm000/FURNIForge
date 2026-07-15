import type { ConfigRate } from "../entities/ConfigRate";
import { ConfigCategory } from "../enums/Config";
import { ConfigRateListItem } from "../read-models/configRates/ConfigRateListItem";
import type { IBaseRepository } from "./IBaseRepository";

export interface IConfigRateRepository extends IBaseRepository<ConfigRate>{
  findAllConfigRates(params: {
    search?: string;
  }): Promise<ConfigRateListItem[]>;

  findByItemNameAndBrand( itemName: string, brand: string, category: ConfigCategory ): Promise<ConfigRate | null>;

  findDuplicate( id: string, itemName: string, brand: string, category: ConfigCategory): Promise<ConfigRate | null>;
}
