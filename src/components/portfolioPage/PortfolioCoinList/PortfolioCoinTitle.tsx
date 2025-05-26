import Image from "next/image";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { CardTitle } from "@/components/ui/shadcn/card";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const PortfolioCoinTitle = ({ coin }: { coin: PortfolioCoinData }) => {
  const breakpoint = useScreenBreakpoint();
  const notLargeScreen = breakpoint === "xl" || breakpoint == "md";

  return (
    <CardTitle className="mb-4 flex items-center gap-2 text-2xl font-bold">
      <Image src={coin.image} alt={coin.name} width={32} height={32} />
      <div className="flex flex-row gap-0 md:flex-col lg:flex-row lg:gap-1">
        <span>{coin.name}</span>
        {notLargeScreen && <span>({coin.symbol.toUpperCase()})</span>}
      </div>
    </CardTitle>
  );
};

export default PortfolioCoinTitle;
