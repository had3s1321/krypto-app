"use client";

import { useAppSelector } from "@/lib/hooks";
import CoinConvertorCard from "./CoinConvertorCard";

const CoinsConvertor = () => {
  const { selectedCoins } = useAppSelector((state) => state.user);

  return (
    <div className="mb-8 flex gap-6 font-grotesk">
      <CoinConvertorCard title="You sell" coin={selectedCoins[0]} />
      <CoinConvertorCard title="You buy" coin={selectedCoins[1]} />
    </div>
  );
};

export default CoinsConvertor;
