import { IndividualCoinDataResponse } from "./types/IndividualCoinData";

export const parseConversionCoin = (data: IndividualCoinDataResponse) => {
  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    image: data.image.large,
    price: data.market_data.current_price.usd,
  };
};
