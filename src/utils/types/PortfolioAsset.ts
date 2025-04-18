export interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  amount: number;
  lastPurchased: Date;
  priceChangePercentage24h: number;
  marketCap: number;
  totalVolume: number;
  circulatingSupply: number;
  maxSupply: number;
}
