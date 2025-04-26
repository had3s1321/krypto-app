import { DownIcon, UpIcon } from "@/components/ui/icons";
import { useFormat } from "@/hooks/useFormat";
import { getDate } from "@/utils/formatUtils";

interface AllTimePriceProps {
  data: { value: number; date: string };
  type: "Low" | "High";
}

const AllTimePrice = ({ data, type }: AllTimePriceProps) => {
  const format = useFormat();

  const { value, date } = data;
  const formattedValue = format(value, {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const formattedDate = getDate(date);

  return (
    <div className="flex justify-between">
      <div className="flex">
        {type === "High" ? (
          <UpIcon customStyles="w-6 h-6 -ml-2" />
        ) : (
          <DownIcon customStyles="w-6 h-6 -ml-2" />
        )}
        <div className="flex flex-col">
          <span className="flex text-base">All time {type}:</span>
          <span className="text-[#B9B9BA]">{formattedDate}</span>
        </div>
      </div>
      <span className="text-xl font-medium">{formattedValue}</span>
    </div>
  );
};

export default AllTimePrice;
