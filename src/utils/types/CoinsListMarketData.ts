interface ROI {
  times: number;
  currency: string;
  percentage: number;
}

interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: ROI | null;
  last_updated: string;
  sparkline_in_7d: {
    price: number[];
  };
  price_change_percentage_1h_in_currency: number;
}

export interface ParsedTableData {
  id: string;
  rank: number;
  image: string;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  progress1: {
    volume24h: number;
    marketCap: number;
    value: number;
  };
  progress2: {
    circulatingSupply: number;
    totalSupply: number;
    value: number;
  };
  chart: number[];
}

export type CoinsListMarketData = CoinMarketData[];
