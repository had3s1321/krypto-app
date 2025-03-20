"use server";

import { fetchData } from "@/utils/fetchData";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseCarouselSliderData } from "@/utils/parseCarouselSliderData";
import { CoinsListMarketData } from "@/utils/types/CoinsListMarketData";

export const getCarouselSliderData = async () => {
  const response: CoinsListMarketData = await fetchData(
    "coins/markets?vs_currency=usd&per_page=100",
    coins_market_data,
  );

  return parseCarouselSliderData(response);
};
