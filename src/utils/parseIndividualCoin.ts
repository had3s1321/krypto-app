import { IndividualCoinDataResponse } from "./types/IndividualCoinData";

export interface PortfolioParams {
  amount: number;
  lastPurchased: string;
}

export const parseIndividualCoin = (
  data: IndividualCoinDataResponse,
  path: "convertor" | "portfolio" | "individual",
) => {
  const convertorData = {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    image: data.image.large,
    price: data.market_data.current_price.usd,
  };

  const portfolioData = {
    ...convertorData,
    priceChangePercentage24h: data.market_data.price_change_percentage_24h,
    totalVolume: data.market_data.total_volume.usd,
    marketCap: data.market_data.market_cap.usd,
    circulatingSupply: data.market_data.circulating_supply,
    maxSupply: data.market_data.max_supply,
  };

  const individualData = {
    ...portfolioData,
    volume24h: data.market_data.total_volume.usd,
    fullyDilutedValuation: data.market_data.fully_diluted_valuation.usd,
    ath: {
      value: data.market_data.ath.usd,
      date: data.market_data.ath_date.usd,
    },
    atl: {
      value: data.market_data.atl.usd,
      date: data.market_data.atl_date.usd,
    },
    links: {
      homepage: data.links.homepage[0],
      blockchain: data.links.blockchain_site,
    },
  };

  switch (path) {
    case "convertor":
      return convertorData;
    case "portfolio":
      return portfolioData;
    case "individual":
      return individualData;
  }
};
