export interface ConversionCoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: Record<string, number>;
  priceChange24h?: Record<string, number> | number;
}

export interface PortfolioCoinData extends ConversionCoinData {
  priceChangePercentage24h: number;
  totalVolume: Record<string, number>;
  marketCap: Record<string, number>;
  circulatingSupply: number;
  maxSupply: number | null;
  amount: number;
  equity: number;
  lastPurchased: string | number;
}

export interface ValueCardData {
  id: string;
  symbol: string;
  name: string;
  price: Record<string, number>;
  priceChange24h: Record<string, number>;
  image: string;
  homepage: string;
  ath: {
    value: Record<string, number>;
    date: Record<string, string>;
  };
  atl: {
    value: Record<string, number>;
    date: Record<string, string>;
  };
}

export interface DescriptionCardData {
  description: string;
  links: string[];
}

export type GenericDataPointValue =
  | Record<string, number>
  | Record<string, number>[]
  | number;

export interface GenericDataPoint {
  displayName: string;
  value: GenericDataPointValue;
  type: string;
}

export interface VolumeCardData {
  totalVolume: GenericDataPoint;
  volume24h: GenericDataPoint;
  volumeMarketFraction: GenericDataPoint;
}

export interface SupplyCardData {
  maxSupply: GenericDataPoint;
  circulatingSupply: GenericDataPoint;
}

export interface MarketCardData {
  marketCap: GenericDataPoint;
  fullyDilutedValuation: GenericDataPoint;
}

export interface IndividualCoinStructuredData {
  valueCardData: ValueCardData;
  descriptionCardData: DescriptionCardData;
  volumeCardData: VolumeCardData;
  supplyCardData: SupplyCardData;
  marketCardData: MarketCardData;
}

export interface IndividualCoinDataResponse {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: Record<string, string>;
  detail_platforms: Record<
    string,
    { decimal_place: number | null; contract_address: string }
  >;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  localization?: Record<string, string>;
  description: Record<string, string>;
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    snapshot_url: string | null;
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: string | null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: {
    current_price: Record<string, number>;
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: number | null;
    ath: Record<string, number>;
    ath_change_percentage: Record<string, number>;
    ath_date: Record<string, string>;
    atl: Record<string, number>;
    atl_change_percentage: Record<string, number>;
    atl_date: Record<string, string>;
    market_cap: Record<string, number>;
    market_cap_rank: number;
    fully_diluted_valuation: Record<string, number>;
    market_cap_fdv_ratio: number;
    total_volume: Record<string, number>;
    high_24h: Record<string, number>;
    low_24h: Record<string, number>;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: Record<string, number>;
    price_change_percentage_1h_in_currency: Record<string, number>;
    price_change_percentage_24h_in_currency: Record<string, number>;
    price_change_percentage_7d_in_currency: Record<string, number>;
    price_change_percentage_14d_in_currency: Record<string, number>;
    price_change_percentage_30d_in_currency: Record<string, number>;
    price_change_percentage_60d_in_currency: Record<string, number>;
    price_change_percentage_200d_in_currency: Record<string, number>;
    price_change_percentage_1y_in_currency: Record<string, number>;
    market_cap_change_24h_in_currency: Record<string, number>;
    market_cap_change_percentage_24h_in_currency: Record<string, number>;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
  };
  community_data?: {
    facebook_likes: number | null;
    twitter_followers: number | null;
    reddit_average_posts_48h: number | null;
    reddit_average_comments_48h: number | null;
    reddit_subscribers: number | null;
    reddit_accounts_active_48h: number | null;
    telegram_channel_user_count: number | null;
  };
  developer_data?: {
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
    commit_count_4_weeks: number;
    last_4_weeks_commit_activity_series: unknown[];
  };
  status_updates: unknown[];
  last_updated: string;
  tickers?: {
    base: string;
    target: string;
    market: {
      name: string;
      identifier: string;
      has_trading_incentive: boolean;
    };
    last: number;
    volume: number;
    converted_last: {
      btc: number;
      eth: number;
      usd: number;
    };
    converted_volume: {
      btc: number;
      eth: number;
      usd: number;
    };
    trust_score: string;
    bid_ask_spread_percentage: number;
    timestamp: string;
    last_traded_at: string;
    last_fetch_at: string;
    is_anomaly: boolean;
    is_stale: boolean;
    trade_url: string;
    token_info_url: string | null;
    coin_id: string;
    target_coin_id: string;
  }[];
}
