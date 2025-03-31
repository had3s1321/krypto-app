"use client";

import { CarouselItemInterface } from "@/components/coinsPage/CoinSlider/CoinsCarousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { useFormat } from "@/hooks/useFormat";
import Image from "next/image";
import { useState } from "react";

const CoinConvertorCard = ({
  title,
  coin,
}: {
  title: string;
  coin?: CarouselItemInterface;
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  const format = useFormat();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(Number(e.target.value));

  return (
    <Card className="w-full border-none bg-[var(--foreground)] text-[var(--clr-nav-text)] shadow-none">
      <CardHeader>
        <CardTitle className="cursor-default text-sm font-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 flex justify-between text-xl font-medium">
          <Input
            type="text"
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleTextChange}
            placeholder={`${coin ? "" : "Please select a coin"}`}
            className="w-1/2 !text-xl placeholder:text-xl"
          />
          <Input
            type="number"
            value={quantity}
            onChange={handleNumberChange}
            className="w-1/5 text-right !text-xl placeholder:text-xl"
          />
          {coin && !isFocused && (
            <>
              <div className="absolute left-0 top-0 mt-1 flex gap-2">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={28}
                  height={24}
                />
                <span>
                  {coin.name} ({coin.symbol})
                </span>
              </div>
            </>
          )}
        </div>
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
