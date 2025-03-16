"use client";

import { DownIcon, UpIcon } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseCarouselSliderData } from "@/utils/parseCarouselSliderData";
import Image from "next/image";

const CarouselSlider = () => {
  const data = parseCarouselSliderData(coins_market_data);

  return (
    <>
      <h3 className="mb-8 font-grotesk text-sm">
        Select the currency to view statistics
      </h3>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {data.slice(0, 5).map((el) => (
            <CarouselItem
              key={el.name}
              className="basis-1/5 [&:not(:first-child)]:pl-2"
            >
              <div>
                <Card className="flex items-center border-none px-4 shadow-none">
                  <Image src={el.image} alt={el.name} width={32} height={32} />
                  <CardContent className="flex flex-col items-start justify-center gap-1 p-3">
                    <span className="text-xl font-semibold">
                      {el.name} ({el.symbol})
                    </span>
                    <span className="flex">
                      <span>{el.price} USD </span>
                      <span
                        className={`ml-2 flex items-center ${el.priceChange > 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {el.priceChange > 0 ? <UpIcon /> : <DownIcon />}
                        {Math.abs(el.priceChange).toFixed(2)}%
                      </span>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
