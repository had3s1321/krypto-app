"use client";

import { useFormat } from "@/hooks/useFormat";
import { Progress } from "@/components/ui/shadcn/progress";

export interface StatsBarElementProps {
  icon?: React.ReactNode;
  name?: string;
  value: number;
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
  const format = useFormat();

  return (
    <div className="flex items-center justify-center gap-1">
      <span>{icon}</span>
      <span>{name ? name : null}</span>
      <span>{format(value, formatOptions)}</span>
      <span>
        {hasProgressBar ? (
          <Progress
            className="w-20"
            value={progressValue ?? value * 100}
            indicatorClassName={progressBarColor}
          />
        ) : null}
      </span>
    </div>
  );
};

export default StatsBarElement;
