"use client";

import { useState } from "react";
import Image from "next/image";
import { DownIcon, UpIcon } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseCarouselSliderData } from "@/utils/parseCarouselSliderData";

interface CarouselItemInterface {
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChange: number;
}

const CarouselSlider = () => {
  const [selectedItems, setSelectedItems] = useState<CarouselItemInterface[]>(
    [],
  );
  const data = parseCarouselSliderData(coins_market_data);
  const isSelectedClass =
    "text-[var(--clr-light-perm)] bg-[var(--primary-foreground)]";

  const handleClick = (item: CarouselItemInterface) => {
    if (selectedItems.some((el) => item.name === el.name)) {
      const newItems = selectedItems.filter((el) => item.name !== el.name);
      setSelectedItems(newItems);
      return;
    }
    if (selectedItems.length > 1) setSelectedItems([selectedItems[1], item]);
    else setSelectedItems([...selectedItems, item]);
  };

  return (
    <>
      <h3 className="mb-8 font-grotesk text-sm text-[var(--clr-nav-text)]">
        Select the currency to view statistics
      </h3>
      <Carousel className="mb-8 w-full">
        <CarouselContent className="-ml-4">
          {data.map((el) => (
            <CarouselItem
              key={el.name}
              onClick={() => handleClick(el)}
              className="basis-1/5 [&:not(:first-child)]:pl-2"
            >
              <div
                className={`rounded-md ${selectedItems.some((item) => item.name === el.name) && isSelectedClass} bg-[var(--foreground)]`}
              >
                <Card className="flex items-center border-none px-4 shadow-none">
                  <Image src={el.image} alt={el.name} width={32} height={32} />
                  <CardContent className="flex flex-col items-start justify-center gap-1 p-3 text-[var(--clr-text)]">
                    <span className="text-xl font-medium">
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
        <CarouselPrevious className="top-10 ml-6 bg-[var(--primary-foreground)] hover:cursor-pointer" />
        <CarouselNext className="top-10 mr-6 bg-[var(--primary-foreground)] hover:cursor-pointer" />
      </Carousel>
    </>
  );
};

export default CarouselSlider;
