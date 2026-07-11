import type { ConfigRate } from "../entities/ConfigRate";
import { ConfigCategory } from "../enums/Config";

export interface IConfigRateRepository {
  findAllConfigRates(params: {
    search?: string;
  }): Promise<ConfigRate[]>;

  findById(id: string): Promise<ConfigRate | null>;

  save(configRate: ConfigRate): Promise<void>;

  findByItemName( itemName: string, category: ConfigCategory ): Promise<ConfigRate | null>;
}
