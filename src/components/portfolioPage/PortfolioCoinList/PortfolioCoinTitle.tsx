import Image from "next/image";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { CardTitle } from "@/components/ui/shadcn/card";
import { getDate } from "@/utils/formatUtils";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const PortfolioCoinTitle = ({ coin }: { coin: PortfolioCoinData }) => {
  const breakpoint = useScreenBreakpoint();
  const notLargeScreen = breakpoint === "xl" || breakpoint == "md";
  const smallScreen = breakpoint === "md";

  return (
    <CardTitle className="mb-4 flex flex-row-reverse items-center justify-between gap-2 text-2xl font-medium md:flex-row md:justify-normal md:font-bold">
      {smallScreen && (
        <div className="absolute right-0 z-0 -mr-14 mt-2">
          <Image
            src={coin.image}
            alt={coin.name}
            width={192}
            height={192}
            className="opacity-30 brightness-[0.2] hue-rotate-[220deg] saturate-[1] sepia [clip-path:inset(23%_31%_0_0)]"
          />
          <div className="right-100w absolute z-30 -mt-[152px] h-[138] w-[136px] rounded-tr-xl border-r-[3px] border-t-4 border-white dark:border-[var(--secondary-foreground)]"></div>
        </div>
      )}
      <Image
        src={coin.image}
        alt={coin.name}
        width={smallScreen ? 48 : 32}
        height={smallScreen ? 48 : 32}
        className="relative z-10"
      />
      <div className="flex flex-col gap-0 md:flex-row lg:flex-row lg:gap-1">
        <span>
          {coin.name} {notLargeScreen && `(${coin.symbol.toUpperCase()})`}
        </span>
        {smallScreen && (
          <span className="text-base">
            Purchased {getDate(coin.lastPurchased)}
          </span>
        )}
      </div>
    </CardTitle>
  );
};

export default PortfolioCoinTitle;
