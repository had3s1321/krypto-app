import { useFormat } from "@/hooks/useFormat";
import { DownIcon, UpIcon } from "@/components/ui/icons";
import { TableCell } from "@/components/ui/shadcn/table";

const PercentageCell = ({ data }: { data?: number }) => {
  const format = useFormat();

  if (!data) return <TableCell>N/A</TableCell>;

  return (
    <TableCell className={`${data > 0 ? "text-green-500" : "text-red-500"}`}>
      {data > 0 ? <UpIcon /> : <DownIcon />}
      {format(data, { style: "percent", maximumFractionDigits: 2 })}
    </TableCell>
  );
};

export default PercentageCell;
