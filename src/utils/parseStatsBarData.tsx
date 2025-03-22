import { StatsBarElementProps } from "@/components/PageHeader/StatsBar/StatusBarElement";
import {
  BitcoinIcon,
  CoinsIcon,
  DownIcon,
  EthereumIcon,
  ExchangeIcon,
  UpIcon,
} from "@/components/ui/icons";
import { StatsBarData } from "./types/StatsBarData";

export const parseStatsBarData = (
  response: StatsBarData,
): StatsBarElementProps[] => {
  const { data } = response;

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
      value: data.total_market_cap.usd,
      icon:
        data.market_cap_change_percentage_24h_usd > 0 ? (
          <UpIcon />
        ) : (
          <DownIcon />
        ),
      formatOptions: {
        style: "decimal",
        notation: "compact",
      },
    },
    {
      value: data.total_volume.usd,
      hasProgressBar: true,
      progressValue: data.market_cap_change_percentage_24h_usd,
      progressBarColor: "bg-[#FFFFFF]",
      formatOptions: {
        style: "currency",
        notation: "compact",
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
        minimumFractionDigits: 0,
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
        minimumFractionDigits: 0,
      },
    },
  ];
};
