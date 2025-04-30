"use client";

import Link from "next/link";
import { useFormat } from "@/hooks/useFormat";
import { useAppSelector } from "@/lib/hooks";
import { getValueIndicator } from "@/utils/getValueIndicator";

interface CoinPriceProps {
  id: string;
  price: number;
  priceChange24h: number;
}

const CoinPrice = ({ id, price, priceChange24h }: CoinPriceProps) => {
  const [format] = useFormat();
  const { assets } = useAppSelector((state) => state.portfolio);

  const isInPortfolio = assets.find((asset) => asset.id === id);
  const profit = isInPortfolio
    ? price * isInPortfolio.amount - isInPortfolio.equity
    : null;
  const formattedProfit =
    profit &&
    format(profit, {
      style: "currency",
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    });
  const formattedPrice = format(price, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedPriceChange = format(Math.abs(priceChange24h) / 100, {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const { icon, classTW } = getValueIndicator(priceChange24h);
  const profitClassTW = profit && getValueIndicator(profit).classTW;

  return (
    <div>
      <span className="mb-2 flex items-baseline gap-4">
        <span className="text-4xl font-bold">{formattedPrice}</span>
        <span
          className={`flex items-center gap-1 text-xl font-medium ${classTW}`}
        >
          {icon} {formattedPriceChange}
        </span>
      </span>
      {isInPortfolio ? (
        <span className="flex gap-4 text-base">
          <span>Profit:</span>
          <span className={`${profitClassTW}`}>{formattedProfit}</span>
        </span>
      ) : (
        <Link
          href="/portfolio"
          className="text-base underline hover:text-[--clr-hover]"
        >
          Add to portfolio
        </Link>
      )}
    </div>
  );
};

export default CoinPrice;
