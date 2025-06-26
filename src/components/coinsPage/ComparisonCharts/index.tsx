"use client";

import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useGetChartDataByCoinQuery } from "@/services/coingeckoApi";
import ChartsSuspenseSkeleton from "./ChartsSuspenseSkeleton";
import IntervalTabs from "../../ui/IntervalTabs";
import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";

const ComparisonCharts = () => {
  const [tabValue, setTabValue] = useState("1D");
  const { selectedCoins, currency } = useAppSelector((state) => state.user);
  const { data, error, isLoading, isFetching } = useGetChartDataByCoinQuery({
    coins: selectedCoins.map((coin) => coin.id),
    currency,
    path: "home",
    range: tabValue,
  });
  const breakpoint = useScreenBreakpoint();

  const isMobile = breakpoint === "md";

  if (isLoading || isFetching) return <ChartsSuspenseSkeleton type="loading" />;

  if (error) return <ChartsSuspenseSkeleton type="error" />;

  return (
    <>
      {isMobile ? (
        <MobileCharts
          data={data}
          selectedCoins={selectedCoins}
          interval={tabValue}
        />
      ) : (
        <DesktopCharts
          data={data}
          selectedCoins={selectedCoins}
          interval={tabValue}
        />
      )}
      <IntervalTabs value={tabValue} onValueChange={setTabValue} />
    </>
  );
};

export default ComparisonCharts;
