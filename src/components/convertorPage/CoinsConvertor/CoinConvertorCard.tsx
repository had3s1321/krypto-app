"use client";

import { CarouselItemInterface } from "@/components/coinsPage/CoinSlider/CoinsCarousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { useFormat } from "@/hooks/useFormat";
import Image from "next/image";

const CoinConvertorCard = ({
  title,
  coin,
}: {
  title: string;
  coin?: CarouselItemInterface;
}) => {
  const format = useFormat();

  return (
    <Card className="w-full border-none bg-[var(--foreground)] text-[var(--clr-nav-text)] shadow-none">
      <CardHeader>
        <CardTitle className="cursor-default text-sm font-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="mb-4 flex gap-2 text-xl font-medium">
          {coin && (
            <Image src={coin.image} alt={coin.name} width={24} height={24} />
          )}
          {coin ? (
            <>
              {coin.name} ({coin.symbol})
            </>
          ) : (
            "Please select a coin"
          )}
        </span>
        <div className="h-[1px] w-full bg-[var(--clr-text)]"></div>
      </CardContent>
      <CardFooter className="-mt-4 cursor-default">
        {coin && (
          <>
            1 {coin.symbol} ={" "}
            {format(coin.price, {
              style: "currency",
              maximumFractionDigits: 2,
            })}
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default CoinConvertorCard;
