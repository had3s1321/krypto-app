"use client";

import CoinConvertorCard from "./CoinConvertorCard";

const CoinsConvertor = () => {
  return (
    <div className="mb-8 flex gap-6 font-grotesk">
      <CoinConvertorCard isSelling />
      <CoinConvertorCard />
    </div>
  );
};

export default CoinsConvertor;
