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
import { FadeStaggerSquares } from "@/components/ui/icons";

const CoinsCarousel = ({ data }: { data: CarouselItemData[] }) => {
  const { currency, selectedCoins, compare, isLoading, handleSelectedCoins } =
    useCarousel(data);

  const skeletonArray = new Array(5).fill(null);

  <FadeStaggerSquares />;
  return (
    <>
      <CarouselTitle compare={compare} />
      <Carousel className="mb-8 w-full">
        <CarouselContent className="-ml-4">
          {isLoading
            ? skeletonArray.map((_, i) => (
                <CarouselItem
                  key={`skeleton-${i}`} // eslint-disable-line
                  className="basis-1/5 [&:not(:first-child)]:pl-2"
                >
                  <Card className="flex items-center gap-2 rounded-md border-none bg-[var(--foreground)] px-4 py-[22px] shadow-lg">
                    <div className="mx-auto h-8 w-8">
                      <FadeStaggerSquares />
                    </div>
                  </Card>
                </CarouselItem>
              ))
            : data &&
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
                      className={`flex items-center rounded-md border-none px-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${
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
        <CarouselPrevious className="top-10 ml-6 bg-[var(--primary-foreground)] hover:cursor-pointer hover:bg-[var(--secondary-foreground)]" />
        <CarouselNext className="top-10 mr-6 bg-[var(--primary-foreground)] hover:cursor-pointer hover:bg-[var(--secondary-foreground)]" />
      </Carousel>
      <SelectedCoins list={selectedCoins} handleClick={handleSelectedCoins} />
    </>
  );
};

export default CoinsCarousel;
