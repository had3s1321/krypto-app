import { getSevenDaysPercentage } from "./formatUtils";
import { CoinsListMarketData } from "./types/CoinsListMarketData";

export const parseTableData = (data: CoinsListMarketData) => {
  return data.map((coin) => {
    return {
      id: coin.id,
      rank: coin.market_cap_rank,
      image: coin.image,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      change1h: coin.price_change_percentage_1h_in_currency / 100,
      change24h: coin.price_change_percentage_24h / 100,
      change7d: getSevenDaysPercentage(
        coin.sparkline_in_7d.price[0],
        coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1],
      ),
      progress1: {
        volume24h: coin.total_volume,
        marketCap: coin.market_cap,
        value: (100 * coin.total_volume) / coin.market_cap,
      },
      progress2: {
        circulatingSupply: coin.circulating_supply,
        totalSupply: coin.total_supply,
        value: (100 * coin.circulating_supply) / coin.total_supply,
      },
      chart: coin.sparkline_in_7d.price,
    };
  });
};
