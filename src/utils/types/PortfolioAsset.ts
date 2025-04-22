export interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  amount: number;
  equity: number;
  lastPurchased: string;
  priceChangePercentage24h: number;
  marketCap: number;
  totalVolume: number;
  circulatingSupply: number;
  maxSupply: number;
}
