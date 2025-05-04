import { IndividualCoinData } from "@/services/types";
import {
  ConversionCoinData,
  IndividualCoinDataResponse,
  IndividualCoinStructuredData,
  PortfolioCoinData,
} from "./types/IndividualCoinData";

export interface PortfolioParams {
  amount: number;
  lastPurchased: string;
}

export const parseIndividualCoin = (
  data: IndividualCoinDataResponse,
  path: "convertor" | "portfolio" | "individual",
): IndividualCoinData => {
  const convertorData = {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    image: data.image.large,
    price: data.market_data.current_price,
    priceChange24h: data.market_data.price_change_percentage_24h_in_currency,
  };

  const portfolioData = {
    ...convertorData,
    priceChangePercentage24h: data.market_data.price_change_percentage_24h,
    totalVolume: data.market_data.total_volume,
    marketCap: data.market_data.market_cap,
    circulatingSupply: data.market_data.circulating_supply,
    maxSupply: data.market_data.max_supply,
  };

  const individualData = {
    valueCardData: {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      price: data.market_data.current_price,
      priceChange24h: data.market_data.price_change_percentage_24h_in_currency,
      image: data.image.large,
      homepage: data.links.homepage[0],
      ath: {
        value: data.market_data.ath,
        date: data.market_data.ath_date,
      },
      atl: {
        value: data.market_data.atl,
        date: data.market_data.atl_date,
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
        value: data.market_data.total_volume,
        type: "currency",
      },
      volumeMarketFraction: {
        displayName: "Volume/Market",
        value: [data.market_data.total_volume, data.market_data.market_cap],
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
        value: data.market_data.market_cap,
        type: "currency",
      },
      fullyDilutedValuation: {
        displayName: "Fully Diluted Valuation",
        value: data.market_data.fully_diluted_valuation,
        type: "currency",
      },
    },
  };

  switch (path) {
    case "convertor":
      return convertorData as ConversionCoinData;
    case "portfolio":
      return portfolioData as Omit<
        PortfolioCoinData,
        "amount" | "equity" | "lastPurchased"
      >;
    case "individual":
      return individualData as IndividualCoinStructuredData;
    default:
      throw new Error(`Invalid path: ${path}`);
  }
};
