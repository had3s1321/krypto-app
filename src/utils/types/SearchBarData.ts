export interface Coin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb?: string;
  large?: string;
}

export type SearchBarData = {
  coins: Coin[];
  exchanges: Record<string, string>[];
  icons: unknown[];
  categories: Record<string, string>[];
  nfts: Record<string, string>[];
} | null;
