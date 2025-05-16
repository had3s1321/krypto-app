"use client";

import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
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
import CarouselTitle from "./CarouselTitle";
import { FadeStaggerSquares } from "@/components/ui/icons";
import { getValueIndicator } from "@/utils/getValueIndicator";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

const CoinCarousel = ({ data }: { data: CarouselItemData[] }) => {
  const { currency, selectedCoins, compare, isLoading, handleSelectedCoins } =
    useCarousel(data);
  const breakpoint = useScreenBreakpoint();

  const skeletonArray = new Array(5).fill(null);
  const imageSize = breakpoint === "lg" ? 28 : 32;

  if (isLoading)
    return (
      <>
        <CarouselTitle compare={compare} />
        <Carousel className="mb-8 w-full">
          <CarouselContent className="-ml-4">
            {skeletonArray.map((_, i) => (
              <CarouselItem
                key={`skeleton-${i}`} // eslint-disable-line
                className="basis-1/5 pb-20 [&:not(:first-child)]:pl-2"
              >
                <Card className="flex items-center gap-2 rounded-md border-none bg-[var(--foreground)] px-4 py-[22px] shadow-lg">
                  <div className="mx-auto h-8 w-8">
                    <FadeStaggerSquares />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </>
    );

  return (
    <>
      <CarouselTitle compare={compare} />
      <Carousel className="mb-14 w-full">
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
                  className="basis-1/4 lg:basis-1/5 [&:not(:first-child)]:pl-2"
                >
                  <Card
                    className={`flex w-full items-center gap-0 rounded-md border-none px-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer lg:gap-2 lg:px-4 ${isSelected}`}
                  >
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={imageSize}
                      height={imageSize}
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
        <CarouselPrevious className="top-10 ml-8 bg-[var(--primary-foreground)] hover:cursor-pointer hover:bg-[var(--secondary-foreground)] lg:ml-6" />
        <CarouselNext className="top-10 mr-8 bg-[var(--primary-foreground)] hover:cursor-pointer hover:bg-[var(--secondary-foreground)] lg:mr-6" />
      </Carousel>
      <SelectedCoins list={selectedCoins} handleClick={handleSelectedCoins} />
    </>
  );
};

export default CoinCarousel;
