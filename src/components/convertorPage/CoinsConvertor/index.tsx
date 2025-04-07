"use client";

import CoinConvertorCard from "./CoinConvertorCard";
import CoinSwitcher from "./CoinSwitcher";

const CoinsConvertor = () => {
  return (
    <div className="relative mb-8 flex gap-6 font-grotesk">
      <CoinConvertorCard isSelling />
      <CoinConvertorCard />
      <CoinSwitcher />
    </div>
  );
};

export default CoinsConvertor;
