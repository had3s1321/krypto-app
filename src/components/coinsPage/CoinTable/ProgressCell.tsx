import { Progress } from "@/components/ui/shadcn/progress";
import { TableCell } from "@/components/ui/shadcn/table";

const ProgressCell = ({ data1, data2 }: { data1: number; data2: number }) => {
  return (
    <TableCell>
      <div className="flex justify-between">
        <span>{data1}</span>
        <span>{data2}</span>
      </div>
      <Progress />
    </TableCell>
  );
};

export default ProgressCell;
