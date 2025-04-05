"use client";

import { createContext, useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useLazyGetConversionCoinDataQuery } from "@/services/coingeckoApi";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";
import { Coin } from "@/utils/types/SearchBarData";

interface ConvertorContextType {
  conversionCoins: ConversionCoinData[];
  sellQuantity: number;
  buyQuantity: number;
  /* eslint-disable no-unused-vars */
  handleSellQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBuyQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewCoin: (payload: Coin, cb: () => void, isSelling?: boolean) => void;
  /* eslint-enable no-unused-vars */
}

export const ConvertorContext = createContext<ConvertorContextType>(
  {} as ConvertorContextType,
);

export const ConvertorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { selectedCoins } = useAppSelector((state) => state.user);
  const [conversionCoins, setConversionCoins] = useState(
    selectedCoins.map((coin) => {
      return {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        price: coin.price,
      };
    }),
  );
  const [sellQuantity, setSellQuantity] = useState<number>(1);
  const [buyQuantity, setBuyQuantity] = useState<number>(1);
  const [conversionRatio, setConversionRatio] = useState<number>(1);
  const [trigger] = useLazyGetConversionCoinDataQuery();

  const handleNewCoin = (
    payload: Coin,
    cb: () => void,
    isSelling?: boolean,
  ) => {
    trigger(payload.id).then((result) => {
      if (result.data) {
        const { data } = result;
        if (isSelling) setConversionCoins([data, conversionCoins[1]]);
        else setConversionCoins([conversionCoins[0], data]);
      }
    });
    cb();
  };

  const handleSellQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSellQuantity = Number(e.target.value);
    setSellQuantity(newSellQuantity);
    if (conversionCoins[1]) setBuyQuantity(newSellQuantity * conversionRatio);
  };

  const handleBuyQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBuyQuantity = Number(e.target.value);
    setBuyQuantity(newBuyQuantity);
    if (conversionCoins[0]) setSellQuantity(newBuyQuantity / conversionRatio);
  };

  useEffect(() => {
    if (!conversionCoins[0] || !conversionCoins[1]) return;

    const ratio = conversionCoins[1].price / conversionCoins[0].price;
    setConversionRatio(ratio);
  }, [conversionCoins]);

  return (
    <ConvertorContext.Provider
      value={{
        conversionCoins,
        sellQuantity,
        buyQuantity,
        handleSellQuantity,
        handleBuyQuantity,
        handleNewCoin,
      }}
    >
      {children}
    </ConvertorContext.Provider>
  );
};
