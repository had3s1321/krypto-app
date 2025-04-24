"use client";

import { useFormat } from "@/hooks/useFormat";

const DataPoint = ({
  value,
  valueType,
  description,
}: {
  value: number;
  valueType: "currency" | "percent";
  description: string;
}) => {
  const format = useFormat();
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

  return (
    <div className="flex w-[calc(50%-0.75rem)] flex-col justify-center rounded-md border-2 border-[var(--clr-nav-foreground)] dark:border-[var(--secondary-foreground)]">
      <span className="ml-2 text-xl font-medium">{formattedValue}</span>
      <span className="ml-2">{description}</span>
    </div>
  );
};

export default DataPoint;
