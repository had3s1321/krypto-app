"use client";

import { useContext, useState } from "react";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch ";
import { ConvertorContext } from "@/contexts/convertorProvider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import Separator from "@/components/ui/Separator";
import CoinsDropdown from "./CoinsDropdown";
import SelectedCoin from "./SelectedCoin";
import CoinFiatValue from "./CoinFiatValue";
import { FadeStaggerSquares } from "@/components/ui/icons";
import { useLazyGetIndividualCoinDataQuery } from "@/services/coingeckoApi";
import { Coin } from "@/utils/types/SearchBarData";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";

const CoinConvertorCard = ({ isSelling }: { isSelling?: boolean }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const {
    conversionCoins,
    sellQuantity,
    buyQuantity,
    handleSellQuantity,
    handleBuyQuantity,
    setConversionCoins,
  } = useContext(ConvertorContext);
  const { data, value, handleChange, clearSearchResults } =
    useDebouncedSearch(250);
  const [trigger, { isFetching }] = useLazyGetIndividualCoinDataQuery();

  const handleNewCoin = (
    payload: Coin,
    cb: () => void,
    isSelling?: boolean,
  ) => {
    trigger({ coin: payload.id, path: "convertor" }).then((result) => {
      if (result.data) {
        const { data } = result;
        if (isSelling)
          setConversionCoins([data as ConversionCoinData, conversionCoins[1]]);
        else
          setConversionCoins([conversionCoins[0], data as ConversionCoinData]);
      }
    });
    cb();
  };

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
    <Card className="w-full border-none bg-[var(--foreground)] text-[var(--clr-nav-text)] shadow-lg">
      <CardHeader>
        <CardTitle className="cursor-default text-sm font-normal">
          {isSelling ? "You sell" : "You buy"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 flex w-full justify-between text-xl font-medium">
          <Input
            type="text"
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={`${conversionCoin || isFetching ? "" : "Please select a coin"}`}
            className="w-2/3 border-none px-0 !text-xl shadow-none placeholder:text-xl focus:placeholder:text-transparent focus-visible:ring-0"
          />
          {conversionCoin && (
            <Input
              type="number"
              min={0}
              step="any"
              value={isSelling ? sellQuantity : buyQuantity}
              onChange={handleQuantityChange}
              className="w-1/3 border-none text-right !text-xl shadow-none [appearance:textfield] placeholder:text-xl focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          )}
          {conversionCoin && !isFocused && (
            <SelectedCoin conversionCoin={conversionCoin} />
          )}
          <CoinsDropdown
            data={data}
            handleNewCoin={handleNewCoin}
            handleBlur={handleBlur}
            isSelling={isSelling}
          />
          {isFetching && (
            <div className="mr-auto h-8 w-8">
              <FadeStaggerSquares />
            </div>
          )}
        </div>
        <Separator />
      </CardContent>
      <CardFooter className="-mt-4 h-11 w-full cursor-default">
        <CoinFiatValue conversionCoin={conversionCoin} />
      </CardFooter>
    </Card>
  );
};

export default CoinConvertorCard;
