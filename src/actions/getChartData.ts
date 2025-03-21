"use server";

import { fetchData } from "@/utils/fetchData";
import { btc_chart_24h_data } from "@/utils/mockData/btc_chart_24h_data";
import { eth_chart_24h_data } from "@/utils/mockData/eth_chart_24h_data";
import { parseChartData } from "@/utils/parseChartData";
import { ChartData } from "@/utils/types/ChartData";

export const getChartData = async (coin1: string, coin2?: string) => {
  const responseCoin1: ChartData = await fetchData(
    `coins/${coin1}/market_chart?vs_currency=usd&days=1`,
    btc_chart_24h_data,
  );
  const responseCoin2: ChartData | null = coin2
    ? await fetchData(
        `coins/${coin2}/market_chart?vs_currency=usd&days=1`,
        eth_chart_24h_data,
      )
    : null;

  if (responseCoin2)
    return {
      prices: parseChartData([responseCoin1, responseCoin2], "prices"),
      volumes: parseChartData([responseCoin1, responseCoin2], "total_volumes"),
    };
  return {
    prices: parseChartData([responseCoin1], "prices"),
    volumes: parseChartData([responseCoin1], "total_volumes"),
  };
};
