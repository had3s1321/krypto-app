import { Card, CardContent, CardHeader } from "@/components/ui/shadcn/card";
import CardButtonGroup from "./CardButtonGroup";
import PortfolioCoinInfo from "./PortfolioCoinInfo";
import PortfolioCoinAnalytics from "./PortfolioCoinAnalytics";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";
import PortfolioCoinTitle from "./PortfolioCoinTitle";

const PortfolioCoin = ({ coin }: { coin: PortfolioCoinData }) => {
  return (
    <Card className="relative flex flex-col border-none bg-[var(--clr-nav-bg)] font-grotesk text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)] md:flex-row">
      <CardHeader className="border-b-none border-r-none mb-0 w-full rounded-l-xl rounded-bl-none rounded-tr-xl pb-0 dark:border-[var(--secondary-foreground)] dark:bg-[var(--secondary-foreground)] md:w-1/4 md:rounded-bl-lg md:rounded-tr-none md:border-b-[5px] md:border-r-[5px] md:pb-2">
        <PortfolioCoinTitle coin={coin} />
        <PortfolioCoinInfo coin={coin} />
      </CardHeader>
      <CardContent className="-mb-1 flex w-full flex-wrap justify-between gap-4 rounded-r-xl border-t-0 pt-3 dark:border-[var(--secondary-foreground)] md:w-3/4 md:border-t-4">
        <PortfolioCoinAnalytics coin={coin} />
        <CardButtonGroup coinId={coin.id} />
      </CardContent>
    </Card>
  );
};

export default PortfolioCoin;
