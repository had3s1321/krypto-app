import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { setTicksPosition } from "@/utils/setTicksPosition";
import { ChartDataByCoin } from "@/services/types";

const ConvertorAreaChart = ({
  data,
  interval,
}: {
  data?: ChartDataByCoin;
  interval: string;
}) => {
  const breakpoint = useScreenBreakpoint();

  const mobileScreen = breakpoint === "md";
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
      className="mb-8 aspect-video h-auto w-full rounded-md bg-[var(--foreground)] md:aspect-auto md:h-64"
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
              x={setTicksPosition(x, interval, "convertor", mobileScreen)}
              y={y + 10}
              textAnchor="middle"
              style={{ fill: "var(--clr-text)", fontSize: 12 }}
            >
              {payload.value}
            </text>
          )}
          minTickGap={30}
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
