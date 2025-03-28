import { ChartData, ParsedChartData } from "./types/ChartData";

export const parseChartData = (
  data: ChartData[],
  key: "prices" | "market_caps" | "total_volumes",
) => {
  const result: ParsedChartData = [];
  if (!data[0]) return result;
  const reducedChartData = reduceChartData(data, key);
  if (reducedChartData.length === 1 && reducedChartData[0])
    reducedChartData[0].forEach((value, key) =>
      result.push({ time: key, coin1: value }),
    );
  else
    reducedChartData[0].forEach((value, key) =>
      result.push({
        time: key,
        coin1: value,
        coin2: reducedChartData[1].get(key),
      }),
    );
  return result;
};

const reduceChartData = (
  data: ChartData[],
  key: "prices" | "market_caps" | "total_volumes",
) => {
  const reducedCoinOneMap = data[0][key].reduce<Map<string, number>>(
    (acc, cur) => {
      const date = new Date(cur[0]);
      const hour = date.getUTCHours().toLocaleString();
      if (acc.has(hour)) return acc;
      acc.set(hour, cur[1]);
      return acc;
    },
    new Map(),
  );
  const reducedCoinTwoMap =
    data.length > 1
      ? data[1][key].reduce<Map<string, number>>((acc, cur) => {
          const date = new Date(cur[0]);
          const hour = date.getUTCHours().toLocaleString();
          if (acc.has(hour)) return acc;
          acc.set(hour, cur[1]);
          return acc;
        }, new Map())
      : null;

  if (reducedCoinTwoMap) return [reducedCoinOneMap, reducedCoinTwoMap];
  return [reducedCoinOneMap];
};
