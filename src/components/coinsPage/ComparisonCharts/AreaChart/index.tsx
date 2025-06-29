"use client";

import { useFormat } from "@/hooks/useFormat";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { setTicksPosition } from "@/utils/setTicksPosition";
import { getDate } from "@/utils/formatUtils";
import { ParsedChartData } from "@/utils/types/ChartData";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

const CustomAreaChart = ({
  chartData,
  coins,
  interval,
  smallScreen,
}: {
  chartData: ParsedChartData | undefined;
  coins: CarouselItemData[];
  interval: string;
  smallScreen?: boolean;
}) => {
  const [format] = useFormat();
  const breakpoint = useScreenBreakpoint();

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
  const isLargeScreen = breakpoint === "lg";
  const isMobile = breakpoint === "md";

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-video min-h-[200px] w-full rounded-md bg-[var(--foreground)] shadow-lg md:w-[calc(50%-2rem)]"
    >
      <AreaChart
        data={chartData}
        width={730}
        height={250}
        margin={
          isMobile
            ? { top: 110, right: 10, left: 10, bottom: 0 }
            : { top: 120, right: 30, left: 30, bottom: 0 }
        }
      >
        <text
          x={isMobile ? 10 : 30}
          y={isMobile ? 35 : 40}
          fontSize={isLargeScreen ? 16 : 20}
          fill="var(--clr-text)"
        >
          {coins &&
            coins.map((coin, i) => {
              if (i === 1) return ` - ${coin.name} (${coin.symbol})`;
              return `${coin.name} (${coin.symbol})`;
            })}
        </text>
        <text
          x={isMobile ? 10 : 30}
          y={isMobile ? 70 : 80}
          fontSize={isLargeScreen ? 24 : 28}
          fontWeight={700}
          fill="var(--clr-text)"
        >
          {coins &&
            coins.map((coin, i) => {
              if (i === 1)
                return (
                  " - " +
                  format(coin.marketCap, {
                    style: "currency",
                    notation: "compact",
                    compactDisplay: "long",
                    maximumFractionDigits: 3,
                  })
                );
              return format(coin.marketCap, {
                style: "currency",
                notation: "compact",
                compactDisplay: "long",
                maximumFractionDigits: 3,
              });
            })}
        </text>
        <text
          x={isMobile ? 10 : 30}
          y={isMobile ? 95 : 105}
          fontSize={isLargeScreen ? 12 : 16}
          fill="var(--clr-nav-text)"
        >
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
              x={setTicksPosition(x, interval, "coins", smallScreen)}
              y={y + 10}
              textAnchor="middle"
              style={{
                fill: "var(--clr-text)",
                fontSize: 12,
              }}
            >
              {payload.value}
            </text>
          )}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey={coins[0].id}
          yAxisId="left"
          scale={coins.length > 1 ? "log" : "linear"}
          domain={["dataMin", "dataMax"]}
          hide
        />
        {coins.length > 1 && chartData && chartData[1] ? (
          <YAxis
            dataKey={coins[1].id}
            yAxisId="right"
            scale="log"
            domain={["dataMin", "dataMax"]}
            orientation="right"
            hide
          />
        ) : null}
        <Tooltip />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey={coins[0].id}
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />

        {coins.length > 1 && chartData && chartData[1] ? (
          <Area
            yAxisId="right"
            type="monotone"
            dataKey={coins[1].id}
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        ) : null}
      </AreaChart>
    </ChartContainer>
  );
};

export default CustomAreaChart;
