"use client";

import { createContext, useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { trimDecimals } from "@/utils/formatUtils";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";

interface ConvertorContextType {
  conversionCoins: ConversionCoinData[];
  sellQuantity: string;
  buyQuantity: string;
  handleSwitch: () => void;
  /* eslint-disable no-unused-vars */
  handleSellQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBuyQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setConversionCoins: (coins: ConversionCoinData[]) => void;
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
  const { selectedCoins, currency } = useAppSelector((state) => state.user);
  const [conversionCoins, setConversionCoins] = useState(
    selectedCoins.map((coin): ConversionCoinData => {
      return {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        price: { [currency]: coin.price },
      };
    }),
  );
  const [sellQuantity, setSellQuantity] = useState<string>("1");
  const [buyQuantity, setBuyQuantity] = useState<string>("");
  const [conversionRatio, setConversionRatio] = useState<number>(1);

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

    const ratio =
      conversionCoins[1].price[currency] / conversionCoins[0].price[currency];
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
        setConversionCoins,
      }}
    >
      {children}
    </ConvertorContext.Provider>
  );
};
