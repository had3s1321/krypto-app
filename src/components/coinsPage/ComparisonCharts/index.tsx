"use client";

// import { useAppSelector } from "@/lib/hooks";
import { useGetChartDataByCoinQuery } from "@/services/coingeckoApi";
import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import IntervalTabs from "./IntervalTabs";

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

const ComparisonCharts = () => {
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
  // const { selectedCoins } = useAppSelector((state) => state.user);
  const { data, error, isLoading } = useGetChartDataByCoinQuery([
    "bitcoin",
    "ethereum",
  ]);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <div className="mb-5 flex justify-between font-grotesk">
        <CustomAreaChart chartData={data?.prices} coinInfos={coinInfos} />
        <CustomBarChart chartData={data?.volumes} coinInfos={coinInfos} />
      </div>
      <IntervalTabs />
    </>
  );
};

export default ComparisonCharts;
