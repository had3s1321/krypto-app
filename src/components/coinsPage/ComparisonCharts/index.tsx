"use client";

import { useAppSelector } from "@/lib/hooks";
import { useGetChartDataByCoinQuery } from "@/services/coingeckoApi";
import ChartsSuspenseSkeleton from "./ChartsSuspenseSkeleton";
import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import IntervalTabs from "../../ui/IntervalTabs";

const ComparisonCharts = () => {
  const { selectedCoins } = useAppSelector((state) => state.user);
  const { data, error, isLoading } = useGetChartDataByCoinQuery({
    coins: selectedCoins.map((coin) => coin.id),
    path: "home",
  });

  if (isLoading) return <ChartsSuspenseSkeleton type="loading" />;

  if (error) return <ChartsSuspenseSkeleton type="error" />;

  return (
    <>
      <div className="mb-5 flex justify-between font-grotesk">
        <CustomAreaChart chartData={data?.prices} coins={selectedCoins} />
        <CustomBarChart chartData={data?.volumes} coins={selectedCoins} />
      </div>
      <IntervalTabs />
    </>
  );
};

export default ComparisonCharts;
