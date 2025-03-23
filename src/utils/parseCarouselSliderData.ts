import { CoinsListMarketData } from "./types/CoinsListMarketData";

export const parseCarouselSliderData = (data: CoinsListMarketData) => {
  return data.map((coin) => {
    return {
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      price: coin.current_price,
      priceChange: coin.price_change_percentage_24h,
      marketCap: coin.market_cap,
      volume: coin.total_volume,
    };
  });
};
