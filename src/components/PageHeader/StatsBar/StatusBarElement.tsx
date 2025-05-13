"use client";

import { useFormat } from "@/hooks/useFormat";
import { Progress } from "@/components/ui/shadcn/progress";

export interface StatsBarElementProps {
  icon?: React.ReactNode;
  name?: string;
  value: number | Record<string, number>;
  hasProgressBar?: boolean;
  progressBarColor?: string;
  progressValue?: number;
  formatOptions?: Record<string, string | number>;
}
const StatsBarElement = ({
  icon,
  name,
  value,
  hasProgressBar,
  progressBarColor,
  progressValue,
  formatOptions,
}: StatsBarElementProps) => {
  const [format, currency] = useFormat();
  const displayValue =
    typeof value === "number" ? value : value[currency] || value.usd;

  return (
    <li className="flex items-center justify-between gap-[2px] md:justify-center md:gap-1">
      <span>{icon}</span>
      <span>{name ? name : null}</span>
      <span>{format(displayValue, formatOptions)}</span>
      <span>
        {hasProgressBar ? (
          <Progress
            className="min-w-14 md:w-20"
            value={progressValue ?? displayValue * 100}
            indicatorClassName={progressBarColor}
          />
        ) : null}
      </span>
    </li>
  );
};

export default StatsBarElement;
