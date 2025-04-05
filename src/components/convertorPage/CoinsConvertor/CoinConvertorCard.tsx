"use client";

import { useContext, useState } from "react";
import { useFormat } from "@/hooks/useFormat";
import { useDebouncedInput } from "@/hooks/useDebouncedInput ";
import { ConvertorContext } from "@/contexts/convertorProvider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import CoinsDropdown from "./CoinsDropdown";
import SelectedCoin from "./SelectedCoin";

const CoinConvertorCard = ({ isSelling }: { isSelling?: boolean }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const {
    conversionCoins,
    sellQuantity,
    buyQuantity,
    handleSellQuantity,
    handleBuyQuantity,
    handleNewCoin,
  } = useContext(ConvertorContext);
  const { data, value, handleChange, clearSearchResults } =
    useDebouncedInput(250);
  const format = useFormat();

  const conversionCoin = isSelling ? conversionCoins[0] : conversionCoins[1];

  const handleFocus = () => {
    setIsFocused(true);
    clearSearchResults();
  };
  const handleBlur = () => {
    setIsFocused(false);
    clearSearchResults();
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSelling) return handleSellQuantity(e);
    return handleBuyQuantity(e);
  };

  return (
    <Card className="w-full border-none bg-[var(--foreground)] text-[var(--clr-nav-text)] shadow-none">
      <CardHeader>
        <CardTitle className="cursor-default text-sm font-normal">
          {isSelling ? "You sell" : "You buy"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 flex justify-between text-xl font-medium">
          <Input
            type="text"
            value={value}
            onFocus={handleFocus}
            // onBlur={handleBlur}
            onChange={handleChange}
            placeholder={`${conversionCoin ? "" : "Please select a coin"}`}
            className="w-2/3 border-none !text-xl shadow-none placeholder:text-xl focus-visible:ring-0"
          />
          {conversionCoin && (
            <Input
              type="number"
              value={isSelling ? sellQuantity : buyQuantity}
              onChange={handleQuantityChange}
              className="w-1/3 border-none text-right !text-xl shadow-none [appearance:textfield] placeholder:text-xl focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          )}
          {conversionCoin && !isFocused && (
            <SelectedCoin conversionCoin={conversionCoin} />
          )}
          {data && (
            <CoinsDropdown
              data={data}
              handleNewCoin={handleNewCoin}
              handleBlur={handleBlur}
              isSelling={isSelling}
            />
          )}
        </div>
        <div className="h-[1px] w-full bg-[var(--clr-text)]"></div>
      </CardContent>
      <CardFooter className="-mt-4 cursor-default">
        {conversionCoin && (
          <>
            1 {conversionCoin.symbol} ={" "}
            {format(conversionCoin.price, {
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
