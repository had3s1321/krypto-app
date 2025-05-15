"use client";

import { TableCell } from "@/components/ui/shadcn/table";
import { Area, AreaChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { useId } from "react";

const ChartCell = ({ data }: { data: number[] }) => {
  const id = useId();

  const isPositive =
    data[0] - data[data.length - 1] < 0 ? "#00B1A6" : "#FE2264";
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: isPositive,
    },
    mobile: {
      label: "Mobile",
      color: isPositive,
    },
  } satisfies ChartConfig;

  const chartData = data.map((el) => {
    return { value: el };
  });

  return (
    <TableCell className="rounded-r-md">
      <ChartContainer config={chartConfig} className="h-[50px] w-full">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id={`colorUv-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isPositive} stopOpacity={0.8} />
              <stop offset="95%" stopColor={isPositive} stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip">
              <rect x="0" y="0" width="100%" height="70%" />
            </clipPath>
          </defs>
          <XAxis dataKey="time" hide />
          <YAxis domain={["dataMin", "dataMax"]} hide />
          <Area
            type="monotone"
            dataKey="value"
            stroke={isPositive}
            fillOpacity={1}
            fill={`url(#colorUv-${id})`}
          />
        </AreaChart>
      </ChartContainer>
    </TableCell>
  );
};

export default ChartCell;
