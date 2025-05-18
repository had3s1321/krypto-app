"use client";

import CoinConvertorCard from "./CoinConvertorCard";
import CoinSwitcher from "./CoinSwitcher";

const CoinsConvertor = () => {
  return (
    <div className="relative mb-8 flex flex-col gap-6 font-grotesk lg:flex-row">
      <CoinConvertorCard isSelling />
      <CoinConvertorCard />
      <CoinSwitcher />
    </div>
  );
};

export default CoinsConvertor;
