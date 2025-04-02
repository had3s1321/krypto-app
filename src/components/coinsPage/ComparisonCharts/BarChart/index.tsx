"use client";

import { useFormat } from "@/hooks/useFormat";
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { getDate } from "@/utils/formatUtils";
import { ParsedChartData } from "@/utils/types/ChartData";
import { CarouselItemInterface } from "@/utils/types/CarouselItemInterface";

const CustomBarChart = ({
  chartData,
  coins,
}: {
  chartData: ParsedChartData | undefined;
  coins: CarouselItemInterface[];
}) => {
  const format = useFormat();
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
      className="aspect-video min-h-[200px] w-[calc(50%-2rem)] rounded-md bg-[var(--foreground)]"
    >
      <BarChart
        data={chartData}
        width={730}
        height={250}
        margin={{ top: 120, right: 30, left: 30, bottom: 0 }}
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
          {coins &&
            coins.map((coin, i) => {
              if (i === 1)
                return (
                  " - " +
                  format(coin.volume, {
                    style: "currency",
                    notation: "compact",
                    compactDisplay: "long",
                    maximumFractionDigits: 3,
                  })
                );
              return format(coin.volume, {
                style: "currency",
                notation: "compact",
                compactDisplay: "long",
                maximumFractionDigits: 3,
              });
            })}
        </text>
        <text x={30} y={105} fontSize={16} fill="var(--clr-nav-text)">
          {coins &&
            coins.map((_, i) => {
              if (i === 1) return null;
              return getDate();
            })}
        </text>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          {chartData && chartData.length > 1 ? (
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          ) : null}
        </defs>

        <XAxis
          dataKey="time"
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y + 10}
              textAnchor="middle"
              style={{ fill: "var(--clr-text)", fontSize: 12 }}
            >
              {payload.value}
            </text>
          )}
          axisLine={false}
          tickLine={false}
        />
        <YAxis domain={["dataMin", "dataMax"]} hide />
        <Tooltip cursor={false} />
        <Bar
          type="monotone"
          dataKey={coins[0].name}
          stroke="#8884d8"
          barSize={15}
          stackId="a"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {chartData && chartData[1] && coins[1] ? (
          <Bar
            type="monotone"
            dataKey={coins[1].name}
            barSize={15}
            stackId="a"
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
