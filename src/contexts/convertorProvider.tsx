"use client";

import { createContext, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useLazyGetConversionCoinDataQuery } from "@/services/coingeckoApi";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";
import { Coin } from "@/utils/types/SearchBarData";

interface ConvertorContextType {
  conversionCoins: ConversionCoinData[];
  // eslint-disable-next-line no-unused-vars
  handleNewCoin: (payload: Coin, cb: () => void, isSelling?: boolean) => void;
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

  return (
    <ConvertorContext.Provider
      value={{
        conversionCoins,
        handleNewCoin,
      }}
    >
      {children}
    </ConvertorContext.Provider>
  );
};
