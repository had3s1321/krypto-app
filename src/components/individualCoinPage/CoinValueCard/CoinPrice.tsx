import { useFormat } from "@/hooks/useFormat";
import { getValueIndicator } from "@/utils/getValueIndicator";

interface CoinPriceProps {
  price: number;
  priceChange24h: number;
}

const CoinPrice = ({ price, priceChange24h }: CoinPriceProps) => {
  const format = useFormat();
  const formattedPrice = format(price, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedPriceChange = format(priceChange24h / 100, {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedProfit = format(1504, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const { icon, classTW } = getValueIndicator(priceChange24h);

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
      <span className="flex gap-4 text-base">
        Profit:<span className={`${classTW}`}>{formattedProfit}</span>
      </span>
    </div>
  );
};

export default CoinPrice;
