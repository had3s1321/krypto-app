"use client";

import { useCarousel } from "@/hooks/useCarousel";
import Image from "next/image";
import CarouselTitle from "./CarouselTitle";
import { Card } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import CoinInfo from "./CoinInfo";
import SelectedCoins from "./SelectedCoins";
import { getValueIndicator } from "@/utils/getValueIndicator";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

const CoinsCarousel = ({ data }: { data: CarouselItemData[] }) => {
  const [currency, selectedCoins, handleSelectedCoins] = useCarousel(data);

  return (
    <>
      <CarouselTitle title="Select the currency to view statistics" />
      <Carousel className="mb-8 w-full">
        <CarouselContent className="-ml-4">
          {data &&
            data.map((coin) => {
              const { icon, classTW } = getValueIndicator(coin.priceChange);
              const isSelected = selectedCoins.some(
                (item) => item.name === coin.name,
              )
                ? "bg-[var(--primary-foreground)] text-[var(--clr-light-perm)]"
                : "bg-[var(--foreground)]";

              return (
                <CarouselItem
                  key={coin.name}
                  onClick={() => handleSelectedCoins(coin)}
                  className="basis-1/5 [&:not(:first-child)]:pl-2"
                >
                  <Card
                    className={`flex items-center rounded-md border-none px-4 shadow-none hover:cursor-pointer ${
                      isSelected
                    }`}
                  >
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={32}
                      height={32}
                    />
                    <CoinInfo
                      coin={coin}
                      currency={currency}
                      icon={icon}
                      classTW={classTW}
                    />
                  </Card>
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
