import Image from "next/image";
import { useFormat } from "@/hooks/useFormat";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import DataPoint from "./DataPoint";
import { getPercentageChange } from "@/utils/getPercentageChange";
import { getValueIndicator } from "@/utils/getValueIndicator";
import { getDate } from "@/utils/formatUtils";
import CardButtonGroup from "./CardButtonGroup";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const PortfolioCoin = ({ coin }: { coin: PortfolioCoinData }) => {
  const format = useFormat();
  const dataEntries = {
    "Current price": coin.price,
    "24h%": coin.priceChangePercentage24h / 100,
    "Market cap vs volume": coin.totalVolume / coin.marketCap,
    "Circ supply vs max supply": coin.maxSupply
      ? coin.circulatingSupply / coin.maxSupply
      : 0,
  };
  const percentageChange = getPercentageChange(
    coin.equity,
    coin.amount,
    coin.price,
  );
  const { icon, classTW } = getValueIndicator(percentageChange);
  const formattedBalance = format(coin.price * coin.amount, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedPercentChange = format(Math.abs(percentageChange) / 100, {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedDate = getDate(coin.lastPurchased);

  return (
    <Card className="flex border-none bg-[var(--clr-nav-bg)] font-grotesk text-[var(--clr-nav-text)] shadow-none dark:bg-[var(--clr-nav-foreground)]">
      <CardHeader className="mb-2 w-1/4 rounded-l-xl rounded-bl-lg pb-2 dark:bg-[var(--secondary-foreground)]">
        <CardTitle className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Image src={coin.image} alt={coin.name} width={32} height={32} />
          <span>{coin.name}</span>
          <span>({coin.symbol.toUpperCase()})</span>
        </CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span className="flex items-center text-2xl font-bold">
            {coin.amount} {coin.symbol.toUpperCase()}
          </span>
          <span className="flex gap-4">
            <span>{formattedBalance}</span>
            <span className={`${classTW} flex items-center`}>
              {icon}
              {formattedPercentChange}
            </span>
          </span>
          <span>{formattedDate}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="relative -mb-1 flex w-3/4 flex-wrap justify-between gap-4 rounded-r-xl border-t-4 border-[var(--clr-nav-bg)] pt-3 dark:border-[var(--secondary-foreground)]">
        {Object.entries(dataEntries).map((entry, index) => (
          <DataPoint
            key={index} // eslint-disable-line react/no-array-index-key
            value={entry[1]}
            description={entry[0]}
            valueType={index === 0 ? "currency" : "percent"}
          />
        ))}
        <CardButtonGroup coinId={coin.id} />
      </CardContent>
    </Card>
  );
};

export default PortfolioCoin;
