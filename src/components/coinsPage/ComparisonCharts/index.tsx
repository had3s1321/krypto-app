"use client";

import { useAppSelector } from "@/lib/hooks";
import { useGetChartDataByCoinQuery } from "@/services/coingeckoApi";
import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import IntervalTabs from "../../ui/IntervalTabs";

export type ParsedChartData = {
  time: string;
  coin1: number;
  coin2?: number;
}[];

const ComparisonCharts = () => {
  const { selectedCoins } = useAppSelector((state) => state.user);
  const { data, error, isLoading } = useGetChartDataByCoinQuery(selectedCoins);

  if (isLoading)
    return (
      <div className="mb-5 flex justify-between font-grotesk">loading...</div>
    );

  if (error)
    return (
      <div className="mb-5 flex justify-between font-grotesk">
        Something went wrong...
      </div>
    );

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
