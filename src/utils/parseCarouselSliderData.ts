import { CoinsListMarketData } from "./types/CoinsListMarketData";

export const parseCarouselSliderData = (data: CoinsListMarketData) => {
  return data.map((coin) => {
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      image: coin.image,
      price: coin.current_price,
      priceChange: coin.price_change_percentage_24h / 100,
      marketCap: coin.market_cap,
      volume: coin.total_volume,
    };
  });
};
