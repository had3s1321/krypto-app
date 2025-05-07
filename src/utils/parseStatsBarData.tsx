import { StatsBarElementProps } from "@/components/PageHeader/StatsBar/StatusBarElement";
import {
  BitcoinIcon,
  CoinsIcon,
  EthereumIcon,
  ExchangeIcon,
} from "@/components/PageHeader/StatsBar/icons";
import { StatsBarData } from "./types/StatsBarData";
import { getValueIndicator } from "./getValueIndicator";

export const parseStatsBarData = (
  response: StatsBarData,
): StatsBarElementProps[] => {
  const { data } = response;
  const { icon } = getValueIndicator(data.market_cap_change_percentage_24h_usd);

  return [
    {
      name: "Coins",
      value: data.active_cryptocurrencies,
      icon: <CoinsIcon />,
      formatOptions: {
        style: "decimal",
      },
    },
    {
      name: "Exchange",
      value: data.markets,
      icon: <ExchangeIcon />,
      formatOptions: {
        style: "decimal",
      },
    },
    {
      value: data.total_market_cap,
      icon: icon,
      formatOptions: {
        style: "decimal",
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
    },
    {
      value: data.total_volume,
      hasProgressBar: true,
      progressValue: data.market_cap_change_percentage_24h_usd,
      progressBarColor: "bg-[#FFFFFF]",
      formatOptions: {
        style: "currency",
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
    },
    {
      value: data.market_cap_percentage.btc / 100,
      hasProgressBar: true,
      icon: <BitcoinIcon />,
      progressBarColor: "bg-[#F7931A]",
      formatOptions: {
        style: "percent",
        maximumFractionDigits: 0,
      },
    },
    {
      value: data.market_cap_percentage.eth / 100,
      hasProgressBar: true,
      icon: <EthereumIcon />,
      progressBarColor: "bg-[#849DFF]",
      formatOptions: {
        style: "percent",
        maximumFractionDigits: 0,
      },
    },
  ];
};
