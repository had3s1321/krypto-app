"use client";

import PortfolioCoin from "./PortfolioCoin";
import { useAppSelector } from "@/lib/hooks";

const PortfolioCoinList = () => {
  const { assets } = useAppSelector((state) => state.portfolio);

  return (
    <div className="mb-36 flex flex-col gap-5 md:mb-0">
      {assets.map((coin) => (
        <PortfolioCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default PortfolioCoinList;
