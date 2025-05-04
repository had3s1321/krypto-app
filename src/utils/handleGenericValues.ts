import { GenericDataPointValue } from "./types/IndividualCoinData";

export const handleGenericValues = (
  value: GenericDataPointValue,
  currency: string,
) => {
  if (Array.isArray(value)) return value[0][currency] / value[1][currency];
  if (typeof value === "object") return value[currency];
  if (typeof value === "number") return value;
  return 0;
};
