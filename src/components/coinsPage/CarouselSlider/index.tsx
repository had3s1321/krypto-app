"use client";

import { useState } from "react";
import Image from "next/image";
import CarouselTitle from "./CarouselTitle";
import { DownIcon, UpIcon } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import SelectedCoins from "./SelectedCoins";

export interface CarouselItemInterface {
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChange: number;
}

const CarouselSlider = ({ data }: { data: CarouselItemInterface[] }) => {
  const [selectedItems, setSelectedItems] = useState<CarouselItemInterface[]>(
    [],
  );

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
      <CarouselTitle title="Select the currency to view statistics" />
      <Carousel className="mb-8 w-full">
        <CarouselContent className="-ml-4">
          {data &&
            data.map((el) => (
              <CarouselItem
                key={el.name}
                onClick={() => handleClick(el)}
                className="basis-1/5 [&:not(:first-child)]:pl-2"
              >
                <div
                  className={`rounded-md ${selectedItems.some((item) => item.name === el.name) && "bg-[var(--primary-foreground)] text-[var(--clr-light-perm)]"} bg-[var(--foreground)] hover:cursor-pointer`}
                >
                  <Card className="flex items-center border-none px-4 shadow-none">
                    <Image
                      src={el.image}
                      alt={el.name}
                      width={32}
                      height={32}
                    />
                    <CardContent className="flex flex-col items-start justify-center gap-1 p-3 text-[var(--clr-text)]">
                      <span className="text-xl font-medium hover:cursor-pointer">
                        {el.name} ({el.symbol})
                      </span>
                      <span className="flex hover:cursor-pointer">
                        <span className="hover:cursor-pointer">
                          {el.price} USD{" "}
                        </span>
                        <span
                          className={`ml-2 flex items-center hover:cursor-pointer ${el.priceChange > 0 ? "text-green-500" : "text-red-500"}`}
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
      <SelectedCoins list={selectedItems} handleClick={handleClick} />
    </>
  );
};

export default CarouselSlider;
