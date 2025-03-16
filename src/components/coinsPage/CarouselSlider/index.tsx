"use client";

import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseCarouselSliderData } from "@/utils/parseCarouselSliderData";

const CarouselSlider = () => {
  const data = parseCarouselSliderData(coins_market_data);

  return (
    <>
      <h3 className="mb-8">Select the currency to view statistics</h3>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {data.slice(0, 5).map((el) => (
            <CarouselItem
              key={el.name}
              className="basis-1/5 [&:not(:first-child)]:pl-2"
            >
              <div className="relative">
                <Card className="border-none p-2 shadow-none">
                  <CardContent className="flex items-center justify-center">
                    <span className="text-2xl font-semibold">{el.name}</span>
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
