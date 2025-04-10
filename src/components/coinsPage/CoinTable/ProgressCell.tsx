import { useFormat } from "@/hooks/useFormat";
import { Progress } from "@/components/ui/shadcn/progress";
import { TableCell } from "@/components/ui/shadcn/table";

const ProgressCell = ({
  data1,
  data2,
  value,
}: {
  data1: number;
  data2: number;
  value: number;
}) => {
  const format = useFormat();

  return (
    <TableCell>
      <div className="flex justify-between">
        <span>{format(data1, { style: "currency", notation: "compact" })}</span>
        <span>{format(data2, { style: "currency", notation: "compact" })}</span>
      </div>
      <Progress value={value} />
    </TableCell>
  );
};

export default ProgressCell;
