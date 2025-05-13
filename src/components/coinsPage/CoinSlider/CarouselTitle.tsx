import { ChartLine } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { Compare } from "@/hooks/useCarousel";

const CarouselTitle = ({ compare }: { compare: Compare }) => {
  const { isCompare, handleCompare } = compare;
  const title = isCompare
    ? "Select 2 currencies to compare statistics"
    : "Select a currency to view statistics";
  const classTW = isCompare
    ? "text-[var(--clr-light-perm)] bg-[var(--primary-foreground)]"
    : "text-[var(--clr-nav-text)]  bg-[var(--foreground)]";

  return (
    <div className="mb-4 flex items-center justify-between md:items-start lg:mb-8">
      <h2 className="font-grotesk text-xs text-[var(--clr-nav-text)] md:text-sm">
        {title}
      </h2>
      <Button
        onClick={handleCompare}
        className={`${classTW} text-xs shadow-lg hover:bg-[var(--clr-hover)] md:text-sm`}
      >
        <ChartLine />
        Compare
      </Button>
    </div>
  );
};

export default CarouselTitle;
