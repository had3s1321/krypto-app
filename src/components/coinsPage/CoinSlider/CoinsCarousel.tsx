"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { useFormat } from "@/hooks/useFormat";
import Image from "next/image";
import CarouselTitle from "./CarouselTitle";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import SelectedCoins from "./SelectedCoins";
import { getValueIndicator } from "@/utils/getValueIndicator";

export interface CarouselItemInterface {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChange: number;
  marketCap: number;
  volume: number;
}

const CoinsCarousel = ({ data }: { data: CarouselItemInterface[] }) => {
  const [currency, selectedCoins, handleSelectedCoins] = useCarousel(data);
  const format = useFormat();

  return (
    <>
      <CarouselTitle title="Select the currency to view statistics" />
      <Carousel className="mb-8 w-full">
        <CarouselContent className="-ml-4">
          {data &&
            data.map((coin) => {
              const { icon, classTW } = getValueIndicator(coin.priceChange);
              return (
                <CarouselItem
                  key={coin.name}
                  onClick={() => handleSelectedCoins(coin)}
                  className="basis-1/5 [&:not(:first-child)]:pl-2"
                >
                  <div
                    className={`rounded-md ${selectedCoins.some((item) => item.name === coin.name) && "bg-[var(--primary-foreground)] text-[var(--clr-light-perm)]"} bg-[var(--foreground)] hover:cursor-pointer`}
                  >
                    <Card className="flex items-center border-none px-4 shadow-none">
                      <Image
                        src={coin.image}
                        alt={coin.name}
                        width={32}
                        height={32}
                      />
                      <CardContent className="flex flex-col items-start justify-center gap-1 p-3 text-[var(--clr-text)]">
                        <span className="text-xl font-medium hover:cursor-pointer">
                          {coin.name} ({coin.symbol})
                        </span>
                        <span className="flex hover:cursor-pointer">
                          <span className="hover:cursor-pointer">
                            {format(coin.price, {
                              style: "decimal",
                            })}{" "}
                            {currency}
                          </span>
                          <span
                            className={`ml-2 flex items-center hover:cursor-pointer ${classTW}`}
                          >
                            {icon}
                            {format(Math.abs(coin.priceChange), {
                              style: "percent",
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="top-10 ml-6 bg-[var(--primary-foreground)] hover:cursor-pointer" />
        <CarouselNext className="top-10 mr-6 bg-[var(--primary-foreground)] hover:cursor-pointer" />
      </Carousel>
      <SelectedCoins list={selectedCoins} handleClick={handleSelectedCoins} />
    </>
  );
};

export default CoinsCarousel;
