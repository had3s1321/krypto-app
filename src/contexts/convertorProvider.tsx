"use client";

import { useAppSelector } from "@/lib/hooks";
import { createContext, useState } from "react";

/* eslint-disable */
interface ConvertorContextType {
  conversionCoins: any[];
  handleNewCoin: any;
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
  const [conversionCoins, setConversionCoins] = useState(selectedCoins);
  const handleNewCoin = (payload: any, cb: any, isSelling?: boolean) => {
    if (isSelling) setConversionCoins([payload, conversionCoins[1]]);
    else setConversionCoins([conversionCoins[0], payload]);
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
