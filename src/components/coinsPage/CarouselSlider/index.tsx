"use client";

import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import * as React from "react";

const CarouselSlider = () => {
  return (
    <>
      <h3 className="mb-8">Select the currency to view statistics</h3>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 [&:not(:first-child)]:pl-2"
            >
              <div className="relative">
                <Card className="border-none p-2 shadow-none">
                  <CardContent className="flex items-center justify-center">
                    <span className="text-2xl font-semibold">{index + 1}</span>
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
