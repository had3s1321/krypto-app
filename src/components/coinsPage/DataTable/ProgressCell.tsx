import { Progress } from "@/components/ui/shadcn/progress";
import { TableCell } from "@/components/ui/shadcn/table";
import { roundNumber } from "@/utils/formatUtils";

const ProgressCell = ({ data1, data2 }: { data1: number; data2: number }) => {
  return (
    <TableCell>
      <div className="flex justify-between">
        <span>{roundNumber(data1, 2)}</span>
        <span>{roundNumber(data2, 2)}</span>
      </div>
      <Progress />
    </TableCell>
  );
};

export default ProgressCell;
