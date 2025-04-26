"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/shadcn/card";
import CoinPrice from "./CoinPrice";
import AllTimePrice from "./AllTimePrice";
import Separator from "@/components/ui/Separator";
import { CopyIcon } from "../icons";
import { ValueCardData } from "@/utils/types/IndividualCoinData";

const CoinValueCard = ({ data }: { data: ValueCardData }) => {
  return (
    <Card className="w-[45%] border-none bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)]">
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
        <CoinPrice price={data.price} priceChange24h={data.priceChange24h} />
        <Separator />
        <div className="flex flex-col gap-3">
          <AllTimePrice data={data.ath} type="High" />
          <AllTimePrice data={data.atl} type="Low" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinValueCard;
