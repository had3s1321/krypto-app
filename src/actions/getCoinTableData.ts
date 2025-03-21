"use server";

import { fetchData } from "@/utils/fetchData";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseTableData } from "@/utils/parseTableData";
import { CoinsListMarketData } from "@/utils/types/CoinsListMarketData";

export const getCoinTableData = async () => {
  const response: CoinsListMarketData = await fetchData(
    "coins/markets?vs_currency=usd&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d",
    coins_market_data,
  );

  return parseTableData(response);
};
