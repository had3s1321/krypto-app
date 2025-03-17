import { getTime } from "./formatUtils";
import { ChartData } from "./types/ChartData";

export const parseChartData = (
  data: ChartData,
  key: "prices" | "market_caps" | "total_volumes",
) => {
  return data[key].map((el) => {
    return {
      time: getTime(el[0]),
      value: parseFloat(el[1].toFixed(2)),
    };
  });
};
