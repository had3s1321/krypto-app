export interface HistoricalCoinPrice {
  id: string;
  price: number;
}

export interface HistoricalCoinResponse {
  id: string;
  symbol: string;
  name: string;
  localization: Record<string, string>;
  image: {
    thumb: string;
    small: string;
  };
  market_data: {
    current_price: Record<string, number>;
    market_cap: Record<string, number>;
    total_volume: Record<string, number>;
  };
  community_data: Record<string, number | null>;
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: {
      additions: number;
      deletions: number;
    };
  };
  public_interest_stats: {
    alexa_rank: number | null;
    bing_matches: number | null;
  };
}
