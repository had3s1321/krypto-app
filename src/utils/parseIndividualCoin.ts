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
      totalVolume: {
        displayName: "Total Volume",
        value: data.market_data.total_volume.btc,
        type: "coin",
      },
      volume24h: {
        displayName: "Volume 24h",
        value: data.market_data.total_volume.usd,
        type: "currency",
      },
      volumeMarketFraction: {
        displayName: "Volume/Market",
        value:
          data.market_data.total_volume.usd / data.market_data.market_cap.usd,
        type: "number",
      },
    },
    supplyCardData: {
      maxSupply: {
        displayName: "Max Supply",
        value: data.market_data.max_supply,
        type: "coin",
      },
      circulatingSupply: {
        displayName: "Circulating Supply",
        value: data.market_data.circulating_supply,
        type: "coin",
      },
    },
    marketCardData: {
      marketCap: {
        displayName: "Market Cap",
        value: data.market_data.market_cap.usd,
        type: "currency",
      },
      fullyDilutedValuation: {
        displayName: "Fully Diluted Valuation",
        value: data.market_data.fully_diluted_valuation.usd,
        type: "currency",
      },
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
