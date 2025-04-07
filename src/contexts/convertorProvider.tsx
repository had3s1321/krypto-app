"use client";

import { createContext, useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useLazyGetConversionCoinDataQuery } from "@/services/coingeckoApi";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";
import { Coin } from "@/utils/types/SearchBarData";
import { trimDecimals } from "@/utils/trimDecimals";

interface ConvertorContextType {
  conversionCoins: ConversionCoinData[];
  sellQuantity: string;
  buyQuantity: string;
  handleSwitch: () => void;
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
  const [sellQuantity, setSellQuantity] = useState<string>("1");
  const [buyQuantity, setBuyQuantity] = useState<string>("");
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
    const newSellQuantity = e.target.value.replace(/^0+(?=\d)/, "");
    setSellQuantity(newSellQuantity);
    if (conversionCoins[1]) {
      const newBuyQuantity = Number(newSellQuantity) / conversionRatio;
      setBuyQuantity(trimDecimals(newBuyQuantity));
    }
  };

  const handleBuyQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBuyQuantity = e.target.value.replace(/^0+(?=\d)/, "");
    setBuyQuantity(newBuyQuantity);
    if (conversionCoins[0]) {
      const newSellQuantity = Number(newBuyQuantity) * conversionRatio;
      setSellQuantity(trimDecimals(newSellQuantity));
    }
  };

  const handleSwitch = () => {
    if (conversionCoins[0] && conversionCoins[1])
      setConversionCoins([conversionCoins[1], conversionCoins[0]]);
  };

  useEffect(() => {
    if (!conversionCoins[0] || !conversionCoins[1]) return;

    const ratio = conversionCoins[1].price / conversionCoins[0].price;
    setConversionRatio(ratio);
    const newBuyQuantity = Number(sellQuantity) * (1 / ratio);
    setBuyQuantity(trimDecimals(newBuyQuantity));
  }, [conversionCoins]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ConvertorContext.Provider
      value={{
        conversionCoins,
        sellQuantity,
        buyQuantity,
        handleSwitch,
        handleSellQuantity,
        handleBuyQuantity,
        handleNewCoin,
      }}
    >
      {children}
    </ConvertorContext.Provider>
  );
};
