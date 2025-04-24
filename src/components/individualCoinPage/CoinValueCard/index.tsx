"use client";

import { useFormat } from "@/hooks/useFormat";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/shadcn/card";
import { CopyIcon } from "../icons";
import { ValueCardData } from "@/utils/types/IndividualCoinData";
import { getValueIndicator } from "@/utils/getValueIndicator";
import { DownIcon, UpIcon } from "@/components/ui/icons";

const CoinValueCard = ({ data }: { data: ValueCardData }) => {
  const format = useFormat();
  const formattedPrice = format(data.price, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedPriceChange = format(data.priceChange24h / 100, {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedProfit = format(1504, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedATH = format(data.ath.value, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedATL = format(data.atl.value, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const { icon, classTW } = getValueIndicator(data.priceChange24h);

  return (
    <Card className="w-[45%] flex-1 border-none bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)] shadow-none dark:bg-[var(--clr-nav-foreground)]">
      <CardHeader className="flex flex-row gap-6">
        <Image src={data.image} alt={data.name} width={52} height={48} />
        <div className="!m-0 flex flex-col">
          <span className="text-2xl font-bold">
            {data.name} ({data.symbol.toUpperCase()})
          </span>
          <span className="flex items-center gap-2">
            {data.homepage}
            <span className="hover:cursor-pointer">
              <CopyIcon />
            </span>
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <span className="mb-2 flex items-baseline gap-4">
            <span className="text-4xl font-bold">{formattedPrice}</span>
            <span
              className={`flex items-center gap-1 text-xl font-medium ${classTW}`}
            >
              {icon} {formattedPriceChange}
            </span>
          </span>
          <span className="flex gap-4 text-base">
            Profit:<span className={`${classTW}`}>{formattedProfit}</span>
          </span>
        </div>
        <div className="h-[0.5px] w-full bg-[var(--clr-text)]"></div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex">
              <UpIcon customStyles="w-6 h-6 -ml-2" />
              <div className="flex flex-col">
                <span className="flex text-base">All time High:</span>
                <span className="text-[#B9B9BA]">{data.ath.date}</span>
              </div>
            </div>
            <span className="text-xl font-medium">{formattedATH}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <DownIcon customStyles="w-6 h-6 -ml-2" />
              <div className="flex flex-col">
                <span className="flex text-base"> All time Low:</span>
                <span className="text-[#B9B9BA]">{data.atl.date}</span>
              </div>
            </div>
            <span className="text-xl font-medium">{formattedATL}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinValueCard;
