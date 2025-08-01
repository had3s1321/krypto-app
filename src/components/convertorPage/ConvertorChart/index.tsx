"use client";

import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { ConvertorContext } from "@/contexts/convertorProvider";
import { useLazyGetChartDataByCoinQuery } from "@/services/coingeckoApi";
import IntervalTabs from "@/components/ui/IntervalTabs";
import ChartSuspenseSkeleton from "./ChartSuspenseSkeleton";
import ConvertorAreaChart from "./Chart";

const ConvertorChart = () => {
  const [tabValue, setTabValue] = useState("1D");
  const { currency } = useAppSelector((state) => state.user);
  const { conversionCoins } = useContext(ConvertorContext);
  const [trigger, { data, error, isFetching }] =
    useLazyGetChartDataByCoinQuery();

  useEffect(() => {
    if (!conversionCoins[0] || !conversionCoins[1]) return;

    const coins = conversionCoins.map((coin) => (coin ? coin.id : ""));
    trigger({ coins, currency, path: "convertor", range: tabValue });
  }, [conversionCoins, tabValue, trigger]); //eslint-disable-line

  if (!conversionCoins[0] || !conversionCoins[1])
    return <ChartSuspenseSkeleton type="no-data" />;

  if (error) return <ChartSuspenseSkeleton type="error" error={error} />;

  if (isFetching) return <ChartSuspenseSkeleton type="loading" />;

  return (
    <div className="mb-32 md:mb-0">
      <ConvertorAreaChart data={data} interval={tabValue} />
      <IntervalTabs value={tabValue} onValueChange={setTabValue} />
    </div>
  );
};

export default ConvertorChart;
