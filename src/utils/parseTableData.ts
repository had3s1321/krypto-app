import { getSevenDaysPercentage } from "./formatUtils";
import { CoinsListMarketData } from "./types/CoinsListMarketData";

export const parseTableData = (data: CoinsListMarketData) => {
  return data.map((el) => {
    return {
      image: el.image,
      name: el.name,
      symbol: el.symbol,
      price: el.current_price,
      change1h: el.price_change_percentage_1h_in_currency,
      change24h: el.price_change_percentage_24h,
      change7d: getSevenDaysPercentage(
        el.sparkline_in_7d.price[0],
        el.sparkline_in_7d.price[el.sparkline_in_7d.price.length - 1],
      ),
      progress1: {
        volume24h: el.total_volume,
        marketCap: el.market_cap,
      },
      progress2: {
        circulatingSupply: el.circulating_supply,
        totalSupply: el.total_supply,
      },
      chart: el.sparkline_in_7d.price,
    };
  });
};
