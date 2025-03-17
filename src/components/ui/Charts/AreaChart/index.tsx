"use client";

import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { btc_chart_24h_data } from "@/utils/mockData/btc_chart_24h_data";
import { parseChartData } from "@/utils/parseChartData";

const CustomAreaChart = () => {
  const chartData = parseChartData(btc_chart_24h_data, "prices");

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-[calc(50%-2rem)] rounded-md bg-[var(--foreground)]"
    >
      <AreaChart
        width={730}
        height={250}
        data={chartData}
        margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
      >
        <text x={30} y={40} fontSize={14} fill="#000000">
          Coin
        </text>
        <text x={30} y={60} fontSize={14} fill="#000000">
          Market cap maybe?
        </text>
        <text x={30} y={80} fontSize={14} fill="#000000">
          Date placeholder
        </text>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          minTickGap={100}
          axisLine={false}
          tickLine={false}
        />
        <YAxis domain={["dataMin - 500", "dataMax + 500"]} hide />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ChartContainer>
  );
};

export default CustomAreaChart;
