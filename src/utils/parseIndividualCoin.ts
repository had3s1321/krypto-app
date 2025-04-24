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
    priceChange24h:
      data.market_data.price_change_percentage_24h_in_currency.usd,
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
    valueCardData: {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      price: data.market_data.current_price.usd,
      priceChange24h:
        data.market_data.price_change_percentage_24h_in_currency.usd,
      image: data.image.large,
      homepage: data.links.homepage[0],
      ath: {
        value: data.market_data.ath.usd,
        date: data.market_data.ath_date.usd,
      },
      atl: {
        value: data.market_data.atl.usd,
        date: data.market_data.atl_date.usd,
      },
    },
    descriptionCardData: {
      description: data.description.en,
      links: data.links.blockchain_site,
    },
    volumeCardData: {
      totalVolume: data.market_data.total_volume.usd,
      volume24h: data.market_data.total_volume.usd,
    },
    supplyCardData: {
      circulatingSupply: data.market_data.circulating_supply,
      maxSupply: data.market_data.max_supply,
    },
    marketCardData: {
      marketCap: data.market_data.market_cap.usd,
      fullyDilutedValuation: data.market_data.fully_diluted_valuation.usd,
    },
  };

  switch (path) {
    case "convertor":
      return convertorData;
    case "portfolio":
      return portfolioData;
    case "individual":
      return individualData;
    default:
      throw new Error(`Invalid path: ${path}`);
  }
};
