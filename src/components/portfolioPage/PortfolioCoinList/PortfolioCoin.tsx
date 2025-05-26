import { Card, CardContent, CardHeader } from "@/components/ui/shadcn/card";
import CardButtonGroup from "./CardButtonGroup";
import PortfolioCoinInfo from "./PortfolioCoinInfo";
import PortfolioCoinAnalytics from "./PortfolioCoinAnalytics";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";
import PortfolioCoinTitle from "./PortfolioCoinTitle";

const PortfolioCoin = ({ coin }: { coin: PortfolioCoinData }) => {
  return (
    <Card className="flex border-none bg-[var(--clr-nav-bg)] font-grotesk text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)]">
      <CardHeader className="mb-2 w-1/4 rounded-l-xl rounded-bl-lg pb-2 dark:bg-[var(--secondary-foreground)]">
        <PortfolioCoinTitle coin={coin} />
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
