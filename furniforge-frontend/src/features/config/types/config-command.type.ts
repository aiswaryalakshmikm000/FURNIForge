import type { ConfigCategory } from "../../../types/enums/config-type.enum";
import type { ConfigRateFormValues } from "../validation/config-rate-form.validation";

export interface ConfigRateCommandDTO extends ConfigRateFormValues {
    category: ConfigCategory;
}

export type UpdateConfigRateDTO = ConfigRateFormValues

export interface ConfigRateCommandResponseDTO {
  id: string;
}

