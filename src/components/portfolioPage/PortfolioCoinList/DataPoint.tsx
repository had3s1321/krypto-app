"use client";

import { Progress } from "@/components/ui/shadcn/progress";
import { useFormat } from "@/hooks/useFormat";
import { getValueIndicator } from "@/utils/getValueIndicator";

const DataPoint = ({
  value,
  valueType,
  description,
  hasIndicator,
}: {
  value: number;
  valueType: "currency" | "percent";
  description: string;
  hasIndicator: boolean;
}) => {
  const [format] = useFormat();

  const formattedValue =
    valueType === "currency"
      ? format(value, {
          style: "currency",
          maximumFractionDigits: 2,
          minimumFractionDigits: 0,
        })
      : format(value, {
          style: "percent",
          maximumFractionDigits: 2,
          minimumFractionDigits: 0,
        });
  const isInfinite = formattedValue.includes("∞");
  const { icon, classTW } = getValueIndicator(value);
  const isPositive =
    value > 0
      ? ["bg-[#00B1A6]", "bg-[#AFE5E5]"]
      : ["bg-[#FE2264]", "bg-[#FBBAD1]"];

  return (
    <div className="flex w-[calc(50%-0.75rem)] flex-col justify-center rounded-md border-2 border-[var(--clr-nav-foreground)] dark:border-[var(--secondary-foreground)]">
      <span
        className={`ml-2 text-xl font-medium ${valueType === "percent" && !isInfinite ? classTW : ""}`}
      >
        {isInfinite ? (
          "Unlimited supply"
        ) : hasIndicator ? (
          <span className="flex items-center gap-2">
            {icon}{" "}
            {Math.abs(
              Number(formattedValue.slice(0, formattedValue.length - 1)),
            )}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            {formattedValue}
            {valueType === "percent" && (
              <Progress
                className={`${isPositive[0]} "mr-2"`}
                indicatorClassName={isPositive[1]}
                value={Number(
                  formattedValue.slice(0, formattedValue.length - 1),
                )}
              />
            )}
          </span>
        )}
      </span>
      <span className="ml-2">{description}</span>
    </div>
  );
};

{
  /* */
}
export default DataPoint;
