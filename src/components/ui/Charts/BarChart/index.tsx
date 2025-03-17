"use client";

import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { btc_chart_24h_data } from "@/utils/mockData/btc_chart_24h_data";
import { parseChartData } from "@/utils/parseChartData";

const CustomBarChart = () => {
  const chartData = parseChartData(btc_chart_24h_data, "total_volumes");

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
      <BarChart
        width={730}
        height={250}
        data={chartData}
        margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
      >
        <text x={30} y={40} fontSize={14} fill="#000000">
          Volume 24h
        </text>
        <text x={30} y={60} fontSize={14} fill="#000000">
          Total volume placeholder
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
        <Bar
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </BarChart>
    </ChartContainer>
  );
};

export default CustomBarChart;
