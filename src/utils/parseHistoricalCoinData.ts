import { HistoricalCoinResponse } from "./types/HistoricalCoinData";

export const parseHistoricalCoinData = (data: HistoricalCoinResponse) => {
  return {
    id: data.id,
    price: data.market_data.current_price.usd,
  };
};
