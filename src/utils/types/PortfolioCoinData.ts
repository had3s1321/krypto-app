import { ConversionCoinData } from "./IndividualCoinData";

export interface PortfolioCoinData extends ConversionCoinData {
  lastPurchased: string;
  priceChangePercentage24h: number;
  marketCap: number;
  totalVolume: number;
  circulatingSupply: number;
  maxSupply: number | null;
}
