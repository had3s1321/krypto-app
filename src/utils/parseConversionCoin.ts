import { IndividualCoinDataResponse } from "./types/IndividualCoinData";

export interface PortfolioParams {
  amount: number;
  lastPurchased: string;
}

export const parseIndividualCoin = (
  data: IndividualCoinDataResponse,
  path: "convertor" | "portfolio",
) => {
  if (path === "convertor")
    return {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image.large,
      price: data.market_data.current_price.usd,
    };
  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    image: data.image.large,
    price: data.market_data.current_price.usd,
    priceChangePercentage24h: data.market_data.price_change_percentage_24h,
    marketCap: data.market_data.market_cap.usd,
    totalVolume: data.market_data.total_volume.usd,
    circulatingSupply: data.market_data.circulating_supply,
    maxSupply: data.market_data.max_supply,
  };
};
