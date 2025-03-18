import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import { parseChartData } from "@/utils/parseChartData";
import { btc_chart_24h_data } from "@/utils/mockData/btc_chart_24h_data";
import { eth_chart_24h_data } from "@/utils/mockData/eth_chart_24h_data";

export type ParsedChartData = {
  time: string;
  value: number;
}[][];

export type CoinInfosData = {
  name: string;
  symbol: string;
  marketCap: string;
  date: string;
  volume: string;
}[];

const Charts = () => {
  // TODO will receive max 2 coins either via or from  redux
  const btcPrices = parseChartData(btc_chart_24h_data, "prices");
  const btcTotalVolumes = parseChartData(btc_chart_24h_data, "total_volumes");
  const ethPrices = parseChartData(eth_chart_24h_data, "prices");
  const ethTotalVolumes = parseChartData(eth_chart_24h_data, "total_volumes");
  const areaChartData = [btcPrices, ethPrices];
  const barChartData = [btcTotalVolumes, ethTotalVolumes];
  // TODO receive this infos through props or make an api call
  const coinInfos: CoinInfosData = [
    {
      name: "Bitcoin",
      symbol: "btc",
      marketCap: "$1.65T tln",
      date: "March 18, 2025",
      volume: "24.9 bln",
    },
    {
      name: "Ethereum",
      symbol: "eth",
      marketCap: "$230.62 bln",
      date: "March 18, 2025",
      volume: "10.39 bln",
    },
  ];

  return (
    <div className="flex justify-between font-grotesk">
      <CustomAreaChart chartData={areaChartData} coinInfos={coinInfos} />
      <CustomBarChart chartData={barChartData} coinInfos={coinInfos} />
    </div>
  );
};

export default Charts;
