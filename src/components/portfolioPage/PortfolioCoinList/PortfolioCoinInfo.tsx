import { getDate } from "@/utils/formatUtils";
import { useFormat } from "@/hooks/useFormat";
import { CardDescription } from "@/components/ui/shadcn/card";
import { getValueIndicator } from "@/utils/getValueIndicator";
import { getPercentageChange } from "@/utils/getPercentageChange";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const PortfolioCoinInfo = ({ coin }: { coin: PortfolioCoinData }) => {
  const [format] = useFormat();

  const percentageChange = getPercentageChange(
    coin.equity,
    coin.amount,
    coin.price,
  );
  const { icon, classTW } = getValueIndicator(percentageChange);
  const formattedPercentChange = format(Math.abs(percentageChange) / 100, {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedBalance = format(coin.price * coin.amount, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedDate = getDate(coin.lastPurchased);

  return (
    <CardDescription className="flex flex-col gap-1">
      <span className="flex items-center text-2xl font-bold">
        {coin.amount} {coin.symbol.toUpperCase()}
      </span>
      <span className="flex gap-4">
        <span>Balance: {formattedBalance}</span>
        <span className={`${classTW} flex items-center`}>
          {icon}
          {formattedPercentChange}
        </span>
      </span>
      <span>Last purchased: {formattedDate}</span>
    </CardDescription>
  );
};

export default PortfolioCoinInfo;
