import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import IntervalTabs from "../../ui/IntervalTabs";
import { getChartData } from "@/actions/getChartData";

export type ParsedChartData = {
  time: string;
  coin1: number;
  coin2?: number;
}[];

export type CoinInfosData = {
  name: string;
  symbol: string;
  marketCap: string;
  date: string;
  volume: string;
}[];

const ComparisonCharts = async () => {
  // TODO will receive max 2 coins either via props or from  redux
  const { prices, volumes } = await getChartData("bitcoin", "ethereum");
  // TODO will receive max 2 coins either via props or from  redux
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
    <>
      <div className="mb-5 flex justify-between font-grotesk">
        <CustomAreaChart chartData={prices} coinInfos={coinInfos} />
        <CustomBarChart chartData={volumes} coinInfos={coinInfos} />
      </div>
      <IntervalTabs />
    </>
  );
};

export default ComparisonCharts;
