"use client";

import { Card, CardContent } from "@/components/ui/shadcn/card";
import { useFormat } from "@/hooks/useFormat";
import { trimDecimals } from "@/utils/formatUtils";
import {
  GenericDataPoint,
  MarketCardData,
  SupplyCardData,
  VolumeCardData,
} from "@/utils/types/IndividualCoinData";
import { PlusIcon } from "../icons";

const CoinGenericDataCard = ({
  data,
}: {
  data: VolumeCardData | SupplyCardData | MarketCardData;
}) => {
  const format = useFormat();

  const formatValue = (value: number, type: string) => {
    switch (type) {
      case "coin":
        return `${format(value, {
          style: "decimal",
          maximumFractionDigits: 2,
          minimumFractionDigits: 0,
        })} BTC`;
      case "currency":
        return format(value, {
          style: "currency",
          maximumFractionDigits: 2,
          minimumFractionDigits: 0,
        });
      case "number":
        return trimDecimals(value);
      default:
        return value;
    }
  };

  return (
    <Card className="w-[calc(50%-1.5rem)] border-none bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)]">
      <CardContent className="flex flex-col gap-4 p-4">
        {Object.values(data).map((value: GenericDataPoint) => (
          <div
            key={value.displayName}
            className="flex w-full items-center gap-2"
          >
            <PlusIcon />
            <div className="flex w-full justify-between text-base">
              <span>{value.displayName}:</span>
              <span>{formatValue(value.value, value.type)}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CoinGenericDataCard;
