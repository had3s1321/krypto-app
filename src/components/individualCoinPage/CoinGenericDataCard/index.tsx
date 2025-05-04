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
import SupplyProgressBar from "./SupplyProgressBar";
import { handleGenericValues } from "@/utils/handleGenericValues";

interface CoinGenericDataCardProps {
  data: VolumeCardData | SupplyCardData | MarketCardData;
  hasProgressBar?: boolean;
}

const CoinGenericDataCard = ({
  data,
  hasProgressBar,
}: CoinGenericDataCardProps) => {
  const [format, currency] = useFormat();

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
  const dataValues = Object.values(data);

  return (
    <Card className="w-[calc(50%-1.5rem)] border-none bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)]">
      <CardContent className="flex flex-col gap-4 p-4">
        {dataValues.map((value: GenericDataPoint) => {
          const genericValue = handleGenericValues(value.value, currency);
          return (
            <div
              key={value.displayName}
              className="flex w-full items-center gap-2"
            >
              <PlusIcon />
              <div className="flex w-full justify-between text-base">
                <span>{value.displayName}:</span>
                <span>{formatValue(genericValue, value.type)}</span>
              </div>
            </div>
          );
        })}
        {hasProgressBar && <SupplyProgressBar data={dataValues} />}
      </CardContent>
    </Card>
  );
};

export default CoinGenericDataCard;
