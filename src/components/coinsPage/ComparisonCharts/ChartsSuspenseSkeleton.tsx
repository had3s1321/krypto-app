"use client";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import IntervalTabs from "@/components/ui/IntervalTabs";
import CoinsChartSuspenseSkeleton from "./ChartSuspenseSkeleton";

const ChartsSuspenseSkeleton = ({ type }: { type: "loading" | "error" }) => {
  const breakpoint = useScreenBreakpoint();

  const isMobile = breakpoint === "md";

  return (
    <div className="font-grotesk">
      {isMobile ? (
        <CoinsChartSuspenseSkeleton type={type} />
      ) : (
        <div className="flex w-full justify-between gap-16">
          <CoinsChartSuspenseSkeleton type={type} />
          <CoinsChartSuspenseSkeleton type={type} />
        </div>
      )}
      <IntervalTabs disabled />
    </div>
  );
};

export default ChartsSuspenseSkeleton;
