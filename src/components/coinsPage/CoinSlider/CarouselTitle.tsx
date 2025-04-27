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
    <div className="flex items-start justify-between">
      <h2 className="mb-8 font-grotesk text-sm text-[var(--clr-nav-text)]">
        {title}
      </h2>
      <Button
        onClick={handleCompare}
        className={`${classTW} shadow-lg hover:bg-[var(--clr-hover)]`}
      >
        <ChartLine />
        Compare
      </Button>
    </div>
  );
};

export default CarouselTitle;
