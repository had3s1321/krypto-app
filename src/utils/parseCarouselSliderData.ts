import { CoinsListMarketData } from "./types/CoinsListMarketData";

export const parseCarouselSliderData = (data: CoinsListMarketData) => {
  return data.map((el) => {
    return {
      name: el.name,
      symbol: el.symbol,
      image: el.image,
      price_change_percentage_24h: el.price_change_percentage_24h,
    };
  });
};
