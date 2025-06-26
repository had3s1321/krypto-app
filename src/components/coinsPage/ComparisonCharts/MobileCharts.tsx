"use client";

import { useState } from "react";
import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import { ChartDataByCoin } from "@/services/types";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ChartProps {
  data?: ChartDataByCoin;
  selectedCoins: CarouselItemData[];
  interval: string;
}

const MobileChart = ({ data, selectedCoins, interval }: ChartProps) => {
  const [selectedChart, setSelectedChart] = useState<"left" | "right">("left");

  const handleSelect = () => {
    if (selectedChart === "left") setSelectedChart("right");
    else setSelectedChart("left");
  };

  return (
    <div className="relative mb-5 w-full font-grotesk">
      <div className="absolute right-2 top-3 z-50 flex gap-2">
        <button
          onClick={handleSelect}
          disabled={selectedChart === "left"}
          className={`flex h-8 w-8 items-center justify-center border disabled:border-gray-600 ${selectedChart === "left" ? "bg-[var(--clr-nav-foreground)]" : "bg-[var(--primary-foreground)]"} rounded-full`}
        >
          <ChevronLeft
            className={`stroke-1 ${selectedChart === "left" ? "stroke-gray-600" : "stroke-white"} size-4 ${selectedChart === "left" ? "hover:cursor-default" : "hover:cursor-pointer"}`}
          />
        </button>
        <button
          onClick={handleSelect}
          disabled={selectedChart === "right"}
          className={`flex h-8 w-8 items-center justify-center border disabled:border-gray-600 ${selectedChart === "right" ? "bg-[var(--clr-nav-foreground)]" : "bg-[var(--primary-foreground)]"} rounded-full`}
        >
          <ChevronRight
            className={`stroke-1 ${selectedChart === "right" ? "stroke-gray-600" : "stroke-white"} size-4 ${selectedChart === "right" ? "hover:cursor-default" : "hover:cursor-pointer"}`}
          />
        </button>
      </div>
      {selectedChart === "left" ? (
        <CustomAreaChart
          chartData={data?.prices}
          coins={selectedCoins}
          interval={interval}
          smallScreen
        />
      ) : (
        <CustomBarChart
          chartData={data?.volumes}
          coins={selectedCoins}
          interval={interval}
          smallScreen
        />
      )}
    </div>
  );
};

export default MobileChart;
