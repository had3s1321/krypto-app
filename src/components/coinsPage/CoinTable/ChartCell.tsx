"use client";

import { TableCell } from "@/components/ui/shadcn/table";
import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";

// TODO replace the implementation with parse chart util func
// eslint-disable-next-line
const ChartCell = ({ data }: { data: any }) => {
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

  // eslint-disable-next-line
  const chartData = data.map((el: any) => {
    return { value: el };
  });

  return (
    <TableCell>
      <ChartContainer config={chartConfig} className="h-[50px] w-[160px]">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip">
              <rect x="0" y="0" width="100%" height="70%" />
            </clipPath>
          </defs>
          <XAxis dataKey="time" hide />
          <YAxis domain={["dataMin - 100", "dataMax + 100"]} hide />
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
    </TableCell>
  );
};

export default ChartCell;
