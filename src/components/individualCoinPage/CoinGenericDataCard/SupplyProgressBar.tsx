import { useFormat } from "@/hooks/useFormat";
import { Progress } from "@/components/ui/shadcn/progress";
import { GenericDataPoint } from "@/utils/types/IndividualCoinData";
import { handleGenericValues } from "@/utils/handleGenericValues";

const SupplyProgressBar = ({ data }: { data: GenericDataPoint[] }) => {
  const [format, currency] = useFormat();

  const [maxSupply, circulatingSupply] = data;
  const leftValue =
    handleGenericValues(circulatingSupply.value, currency) /
    handleGenericValues(maxSupply.value, currency);
  const rightValue = 1 - leftValue;
  const formattedLeftValue = format(leftValue, { style: "percent" });
  const formattedRightValue = format(rightValue, { style: "percent" });
  const classTW = maxSupply.value ? "justify-between" : "justify-end";

  return (
    <div className="w-full">
      <span className={`mb-1 flex w-full ${classTW}`}>
        {maxSupply.value && (
          <span className="flex items-center gap-1 text-xs text-[#D4770C]">
            <div className="h-2 w-2 rounded-full bg-[#D4770C]"></div>
            {formattedLeftValue}
          </span>
        )}
        <span className="flex items-center gap-1 text-xs text-[#F8D2A6]">
          <div className="h-2 w-2 rounded-full bg-[#F8D2A6]"></div>
          {maxSupply.value ? formattedRightValue : "Unlimited supply"}
        </span>
      </span>
      <Progress
        className="bg-[#F8D2A6]"
        indicatorClassName="bg-[#D4770C]"
        value={leftValue * 100}
      />
    </div>
  );
};

export default SupplyProgressBar;
