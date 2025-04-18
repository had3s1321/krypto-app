import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import Image from "next/image";
import DataPoint from "./DataPoint";
import { PortfolioAsset } from "@/utils/types/PortfolioAsset";

const PortfolioCoin = ({ coin }: { coin: PortfolioAsset }) => {
  const dataEntries = {
    "Current price": coin.price,
    "24h%": coin.priceChangePercentage24h,
    "Market cap vs volume": coin.marketCap / coin.circulatingSupply,
    "Circ supply vs max supply": coin.maxSupply
      ? coin.circulatingSupply / coin.maxSupply
      : 0,
  };

  return (
    <Card className="flex border-none bg-[var(--clr-nav-bg)] font-grotesk text-[var(--clr-nav-text)] shadow-none dark:bg-[var(--clr-nav-foreground)]">
      <CardHeader className="mb-2 w-1/4 rounded-l-xl rounded-bl-lg pb-2 dark:bg-[var(--secondary-foreground)]">
        <CardTitle className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Image src={coin.image} alt={coin.name} width={32} height={32} />
          <span>{coin.name}</span>
          <span>({coin.symbol.toUpperCase()})</span>
        </CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span>Total Value</span>
          <span className="flex items-center text-2xl font-bold">
            {coin.price} USD
            <span className="ml-2 text-base font-bold"> 6%</span>
          </span>
          <span>Purchased 01.04.2025</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="-mb-1 flex w-3/4 flex-wrap justify-between gap-4 rounded-r-xl border-t-4 border-[var(--clr-nav-bg)] pt-3 dark:border-[var(--secondary-foreground)]">
        {Object.entries(dataEntries).map((entry, index) => (
          <DataPoint
            key={index} // eslint-disable-line react/no-array-index-key
            value={entry[1]}
            description={entry[0]}
            valueType={index === 0 ? "currency" : "percent"}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default PortfolioCoin;
