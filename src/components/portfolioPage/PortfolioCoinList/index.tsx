"use client";

import PortfolioCoin from "./PortfolioCoin";
import { useAppSelector } from "@/lib/hooks";

const PortfolioCoinList = () => {
  const { assets } = useAppSelector((state) => state.portfolio);

  return (
    <div className="flex flex-col gap-5">
      {assets.map((coin) => (
        <PortfolioCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default PortfolioCoinList;
