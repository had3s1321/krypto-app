import { PortfolioCoinData } from "../types/PortfolioCoinData";

export const portfolio_list: PortfolioCoinData[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    price: 70500.25,
    lastPurchased: "2025-04-08T14:32:00Z",
    priceChangePercentage24h: -1.45,
    marketCap: 1380000000000,
    totalVolume: 32000000000,
    circulatingSupply: 19650000,
    maxSupply: 21000000,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    price: 3600.75,
    lastPurchased: "2025-04-05T09:15:00Z",
    priceChangePercentage24h: 0.87,
    marketCap: 430000000000,
    totalVolume: 18000000000,
    circulatingSupply: 120200000,
    maxSupply: null,
  },
];
