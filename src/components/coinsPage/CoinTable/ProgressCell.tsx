import { useFormat } from "@/hooks/useFormat";
import { Progress } from "@/components/ui/shadcn/progress";
import { TableCell } from "@/components/ui/shadcn/table";

interface ProgressCellProps {
  data1: number;
  data2: number;
  sign: number;
}

const ProgressCell = ({ data1, data2, sign }: ProgressCellProps) => {
  const [format] = useFormat();
  const value = (100 * data1) / data2;
  const isPositive =
    sign > 0
      ? ["text-[#00B1A6]", "bg-[#00B1A6]", "bg-[#AFE5E5]", "text-[#AFE5E5]"]
      : ["text-[#FE2264]", "bg-[#FE2264]", "bg-[#FBBAD1]", "text-[#FBBAD1]"];

  return (
    <TableCell>
      <div className="flex justify-between">
        <span className={`${isPositive[0]} text-xs hover:cursor-pointer`}>
          {format(data1, { style: "currency", notation: "compact" })}
        </span>
        <span
          className={`${isPositive[3]} text-xs text-[var(--clr-text)] hover:cursor-pointer`}
        >
          {format(data2, { style: "currency", notation: "compact" })}
        </span>
      </div>
      <Progress
        value={value}
        className={isPositive[2]}
        indicatorClassName={isPositive[1]}
      />
    </TableCell>
  );
};

export default ProgressCell;
