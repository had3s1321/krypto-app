import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { ChartDataByCoin } from "@/services/types";

const ConvertorAreaChart = ({ data }: { data?: ChartDataByCoin }) => {
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
      className="mb-8 h-64 min-h-[200px] w-full rounded-md bg-[var(--foreground)]"
    >
      <AreaChart
        data={data?.prices}
        width={730}
        height={250}
        margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          tick={({ x, y, payload }) => (
            <text
              x={x - 10}
              y={y + 10}
              textAnchor="middle"
              style={{ fill: "var(--clr-text)", fontSize: 12 }}
            >
              {payload.value}
            </text>
          )}
          minTickGap={100}
          axisLine={false}
          tickLine={false}
        />
        <YAxis domain={["dataMin", "dataMax"]} hide />
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

export default ConvertorAreaChart;
