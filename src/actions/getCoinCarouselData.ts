"use server";

import { fetchData } from "@/utils/fetchData";
import { parseCarouselSliderData } from "@/utils/parseCarouselSliderData";
import { CoinsListMarketData } from "@/utils/types/CoinsListMarketData";

export const getCarouselSliderData = async (currency: string) => {
  const response: CoinsListMarketData = await fetchData(
    `coins/markets?vs_currency=${currency}&per_page=100`,
    { cache: "no-store" },
  );

  return parseCarouselSliderData(response, currency);
};
