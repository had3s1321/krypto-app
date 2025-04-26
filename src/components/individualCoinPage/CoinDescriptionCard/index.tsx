import { Card, CardContent } from "@/components/ui/shadcn/card";
import { DescriptionCardData } from "@/utils/types/IndividualCoinData";
import { CopyIcon } from "../icons";

const CoinDescriptionCard = ({ data }: { data: DescriptionCardData }) => {
  return (
    <Card className="h-full w-[55%] border-none text-[var(--clr-nav-text)] shadow-none">
      <CardContent className="flex h-full flex-col justify-between gap-4 p-0">
        <div className="scrollbar h-[75%] overflow-y-auto">
          <p className="mr-2">{data.description}</p>
        </div>
        <div className="flex h-[25%] flex-wrap gap-1">
          {data.links.slice(0, 4).map((link) => (
            <Card
              key={link}
              className="flex h-1/2 w-fit items-center border-none bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)]"
            >
              <CardContent className="flex items-center gap-2 p-4">
                {link} <CopyIcon />
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinDescriptionCard;
