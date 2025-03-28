import { useFormat } from "@/hooks/useFormat";
import { TableCell } from "@/components/ui/shadcn/table";
import { getValueIndicator } from "@/utils/getValueIndicator";

const PercentageCell = ({ data }: { data?: number }) => {
  const format = useFormat();

  if (!data) return <TableCell>N/A</TableCell>;
  const { icon, classTW } = getValueIndicator(data);

  return (
    <TableCell className={`${classTW}`}>
      <div className={`flex items-center ${classTW}`}>
        {icon}{" "}
        {format(Math.abs(data), { style: "percent", maximumFractionDigits: 2 })}
      </div>
    </TableCell>
  );
};

export default PercentageCell;
