import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import CardButtonGroup from "./CardButtonGroup";
import PortfolioCoinInfo from "./PortfolioCoinInfo";
import PortfolioCoinAnalytics from "./PortfolioCoinAnalytics";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const PortfolioCoin = ({ coin }: { coin: PortfolioCoinData }) => {
  return (
    <Card className="flex border-none bg-[var(--clr-nav-bg)] font-grotesk text-[var(--clr-nav-text)] shadow-none dark:bg-[var(--clr-nav-foreground)]">
      <CardHeader className="mb-2 w-1/4 rounded-l-xl rounded-bl-lg pb-2 dark:bg-[var(--secondary-foreground)]">
        <CardTitle className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Image src={coin.image} alt={coin.name} width={32} height={32} />
          <span>{coin.name}</span>
          <span>({coin.symbol.toUpperCase()})</span>
        </CardTitle>
        <PortfolioCoinInfo coin={coin} />
      </CardHeader>
      <CardContent className="relative -mb-1 flex w-3/4 flex-wrap justify-between gap-4 rounded-r-xl border-t-4 border-[var(--clr-nav-bg)] pt-3 dark:border-[var(--secondary-foreground)]">
        <PortfolioCoinAnalytics coin={coin} />
        <CardButtonGroup coinId={coin.id} />
      </CardContent>
    </Card>
  );
};

export default PortfolioCoin;
