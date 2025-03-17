import { Progress } from "@/components/ui/shadcn/progress";
import { parsePercentageValue } from "@/utils/formatUtils";

export interface StatsBarElementProps {
  icon?: React.ReactNode;
  name?: string;
  value: number | string;
  changeValue?: number;
  hasProgressBar?: boolean;
  progressBarColor?: string;
}
const StatsBarElement = ({
  icon,
  name,
  value,
  changeValue,
  hasProgressBar,
  progressBarColor,
}: StatsBarElementProps) => {
  const progressValue = changeValue ? changeValue : parsePercentageValue(value);

  return (
    <div className="flex items-center justify-center gap-2">
      <span>{icon}</span>
      <span>{name ? name : null}</span>
      <span>{value}</span>
      <span>
        {hasProgressBar ? (
          <Progress
            className="w-20"
            value={progressValue}
            indicatorClassName={progressBarColor}
          />
        ) : null}
      </span>
    </div>
  );
};

export default StatsBarElement;
