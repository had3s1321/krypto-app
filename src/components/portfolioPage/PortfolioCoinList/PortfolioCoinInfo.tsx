import { useFormat } from "@/hooks/useFormat";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { CardDescription } from "@/components/ui/shadcn/card";
import { getValueIndicator } from "@/utils/getValueIndicator";
import { getPercentageChange } from "@/utils/getPercentageChange";
import { getDate } from "@/utils/formatUtils";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const PortfolioCoinInfo = ({ coin }: { coin: PortfolioCoinData }) => {
  const [format, currency] = useFormat();
  const breakpoint = useScreenBreakpoint();

  const percentageChange = getPercentageChange(
    coin.equity,
    coin.amount,
    coin.price[currency],
  );
  const { icon, classTW } = getValueIndicator(percentageChange);
  const formattedPercentChange = format(Math.abs(percentageChange) / 100, {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedBalance = format(coin.price[currency] * coin.amount, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedDate = getDate(coin.lastPurchased);
  const notSmallScreen = breakpoint !== "md";
  const extraLargeScreen = breakpoint === "xl";

  return (
    <CardDescription className="flex flex-col gap-1">
      {notSmallScreen && (
        <span className="flex items-center text-2xl font-bold">
          {coin.amount} {coin.symbol.toUpperCase()}
        </span>
      )}
      <span className="flex items-end gap-4 md:items-center">
        <span className="text-2xl font-bold md:text-sm md:font-normal">
          {extraLargeScreen && "Balance: "}
          {formattedBalance}
        </span>
        <span
          className={`${classTW} flex items-center font-medium md:font-normal`}
        >
          {icon}
          {formattedPercentChange}
        </span>
      </span>
      {notSmallScreen && (
        <span>
          {extraLargeScreen && "Last purchased: "}
          {formattedDate}
        </span>
      )}
    </CardDescription>
  );
};

export default PortfolioCoinInfo;
