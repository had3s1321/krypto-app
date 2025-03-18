"use client";

import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { CoinInfosData, ParsedChartData } from "..";

const CustomBarChart = ({
  chartData,
  coinInfos,
}: {
  chartData: ParsedChartData;
  coinInfos: CoinInfosData;
}) => {
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
        margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
      >
        <text x={30} y={40} fontSize={20} fill="var(--clr-text)">
          Volume 24h
        </text>
        <text
          x={30}
          y={80}
          fontSize={28}
          fontWeight={700}
          fill="var(--clr-text)"
        >
          {coinInfos.map((el, i) => {
            if (i === 1) return " - " + el.volume;
            return el.volume;
          })}
        </text>
        <text x={30} y={105} fontSize={16} fill="var(--clr-nav-text)">
          {coinInfos.map((el, i) => {
            if (i === 1) return null;
            return el.date;
          })}
        </text>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          {chartData.length > 1 ? (
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          ) : null}
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
          data={chartData[0]}
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {chartData.length > 1 ? (
          <Bar
            data={chartData[1]}
            type="monotone"
            dataKey="value"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        ) : null}
      </BarChart>
    </ChartContainer>
  );
};

export default CustomBarChart;
