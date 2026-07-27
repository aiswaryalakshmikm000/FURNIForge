import { ConfigUnit } from "../../types/enums/config-type.enum";

export const CONFIG_UNIT_LABEL: Record<ConfigUnit, string> = {
  [ConfigUnit.SQFT]: "sq.ft",
  [ConfigUnit.RUNNING_LENGTH]: "running ft",
  [ConfigUnit.PIECE]: "piece",
};

export const getConfigUnitLabel = (unit: ConfigUnit) => CONFIG_UNIT_LABEL[unit] ?? unit;