import { useFormat } from "@/hooks/useFormat";
import { Progress } from "@/components/ui/shadcn/progress";
import { GenericDataPoint } from "@/utils/types/IndividualCoinData";

const SupplyProgressBar = ({ data }: { data: GenericDataPoint[] }) => {
  const format = useFormat();

  const [maxSupply, circulatingSupply] = data;
  const leftValue = Math.round(circulatingSupply.value / maxSupply.value);
  const rightValue = 100 - leftValue;
  const formattedLeftValue = format(leftValue / 100, { style: "percent" });
  const formattedRightValue = format(rightValue / 100, { style: "percent" });

  return (
    <div className="w-full">
      <span className="mb-1 flex w-full justify-between">
        <span className="flex items-center gap-1 text-xs text-[#D4770C]">
          <div className="h-2 w-2 rounded-full bg-[#D4770C]"></div>
          {formattedLeftValue}
        </span>
        <span className="flex items-center gap-1 text-xs text-[#F8D2A6]">
          <div className="h-2 w-2 rounded-full bg-[#F8D2A6]"></div>
          {formattedRightValue}
        </span>
      </span>
      <Progress
        className="bg-[#F8D2A6]"
        indicatorClassName="bg-[#D4770C]"
        value={leftValue}
      />
    </div>
  );
};

export default SupplyProgressBar;
