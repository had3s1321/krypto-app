import LinkContainer from "../LinkContainer";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { DescriptionCardData } from "@/utils/types/IndividualCoinData";

const CoinDescriptionCard = ({ data }: { data: DescriptionCardData }) => {
  return (
    <Card className="h-full w-full border-none text-[var(--clr-nav-text)] shadow-none md:w-[52.5%]">
      <CardContent className="flex h-full flex-col justify-between gap-4 p-0">
        {data.description && (
          <div className="scrollbar h-auto min-h-0 flex-1 overflow-y-auto">
            <p className="mr-2">{data.description}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-1">
          {data.links
            .slice(0, 3)
            .sort((a, b) => a.length - b.length)
            .map((link) => (
              <Card
                key={link}
                className="flex h-fit w-fit items-center overflow-hidden border-none bg-[var(--clr-nav-bg)] text-[var(--clr-nav-text)] shadow-lg dark:bg-[var(--clr-nav-foreground)]"
              >
                <CardContent className="overflow-hidden text-ellipsis whitespace-nowrap p-4">
                  <LinkContainer url={link} />
                </CardContent>
              </Card>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinDescriptionCard;
