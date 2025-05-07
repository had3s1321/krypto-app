import { formatChartDate } from "./formatUtils";
import { getDateKeyForInterval } from "./getDateKeyForInterval";
import { ChartData, ParsedChartData } from "./types/ChartData";

export const parseChartData = (
  data: ChartData[],
  coinNames: string[],
  key: "prices" | "market_caps" | "total_volumes",
  interval: string,
) => {
  const result: ParsedChartData = [];
  if (!data[0]) return result;

  const reducedChartData = reduceChartData(data, key, interval);
  const coinName1 = coinNames[0];
  const coinName2 = coinNames[1] ? coinNames[1] : "name error";

  if (reducedChartData.length === 1 && reducedChartData[0])
    reducedChartData[0].forEach((value, key) =>
      result.push({ time: formatChartDate(key), [coinName1]: value }),
    );
  else
    reducedChartData[0].forEach((value, key) =>
      result.push({
        time: formatChartDate(key),
        [coinName1]: value,
        [coinName2]: reducedChartData[1].get(key),
      }),
    );

  return result;
};

export const parseConversionCoinsChartData = (
  data: ChartData[],
  interval: string,
) => {
  const result: ParsedChartData = [];
  const reducedChartData = reduceChartData(data, "prices", interval);
  const coinToSell = reducedChartData[0];
  const coinToBuy = reducedChartData[1];

  if (reducedChartData.length > 1 && coinToBuy)
    coinToSell.forEach((value, key) => {
      const buyValue = coinToBuy.get(key);
      if (buyValue !== undefined)
        result.push({
          time: key,
          value: value / buyValue,
        });
    });

  return result;
};

const reduceChartData = (
  data: ChartData[],
  key: "prices" | "market_caps" | "total_volumes",
  interval: string,
) => {
  const reduceCallback = (acc: Map<string, number>, cur: number[]) => {
    const [timestamp, value] = cur;
    const dateKey = getDateKeyForInterval(timestamp, interval);
    if (acc.has(dateKey)) return acc;
    acc.set(dateKey, value);
    return acc;
  };

  const reducedCoinOneMap = data[0][key].reduce<Map<string, number>>(
    reduceCallback,
    new Map(),
  );
  const reducedCoinTwoMap =
    data.length > 1
      ? data[1][key].reduce<Map<string, number>>(reduceCallback, new Map())
      : null;

  if (reducedCoinTwoMap) return [reducedCoinOneMap, reducedCoinTwoMap];
  return [reducedCoinOneMap];
};
