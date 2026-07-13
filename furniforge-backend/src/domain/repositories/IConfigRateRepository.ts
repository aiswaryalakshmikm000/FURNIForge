import type { ConfigRate } from "../entities/ConfigRate";
import { ConfigCategory } from "../enums/Config";
import { ConfigRateListItem } from "../read-models/configRates/ConfigRateListItem";
import type { IBaseRepository } from "./IBaseRepository";

export interface IConfigRateRepository extends IBaseRepository<ConfigRate>{
  findAllConfigRates(params: {
    search?: string;
  }): Promise<ConfigRateListItem[]>;

  // save(configRate: ConfigRate): Promise<void>;

  findByItemName( itemName: string, category: ConfigCategory ): Promise<ConfigRate | null>;
}
