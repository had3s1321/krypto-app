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
import { roundNumber } from "./formatUtils";

export const parseStatsBarData = (
  response: StatsBarData,
): StatsBarElementProps[] => {
  const { data } = response;

  return [
    {
      name: "Coins",
      value: data.active_cryptocurrencies,

      icon: <CoinsIcon />,
    },
    {
      name: "Exchange",
      value: data.markets,

      icon: <ExchangeIcon />,
    },
    { value: `${roundNumber(data.total_market_cap.usd, 2)} T` },
    {
      value: `$${roundNumber(data.total_volume.usd, 2)}B`,
      hasProgressBar: true,
      icon:
        data.market_cap_change_percentage_24h_usd > 0 ? (
          <UpIcon />
        ) : (
          <DownIcon />
        ),
      progressBarColor: "bg-[#FFFFFF]",
    },
    {
      value: `${roundNumber(data.market_cap_percentage.btc, 0)}%`,

      hasProgressBar: true,
      icon: <BitcoinIcon />,
      progressBarColor: "bg-[#F7931A]",
    },
    {
      value: `${roundNumber(data.market_cap_percentage.eth, 0)}%`,

      hasProgressBar: true,
      icon: <EthereumIcon />,
      progressBarColor: "bg-[#849DFF]",
    },
  ];
};
