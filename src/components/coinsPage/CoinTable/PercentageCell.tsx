import { useFormat } from "@/hooks/useFormat";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { TableCell } from "@/components/ui/shadcn/table";
import { getValueIndicator } from "@/utils/getValueIndicator";

interface PercentageCellProps {
  priceChange?: number;
  price?: number;
}

const PercentageCell = ({ priceChange, price }: PercentageCellProps) => {
  const [format] = useFormat();
  const breakpoint = useScreenBreakpoint();

  const priceChangeInCurrency = price && priceChange && price * priceChange;
  const formattedPriceChangeInCurrency = priceChangeInCurrency
    ? format(Math.abs(priceChangeInCurrency), {
        style: "currency",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      })
    : "N/A";

  if (!priceChange)
    return <TableCell className="text-[var(--clr-text)]">N/A</TableCell>;
  const { icon, classTW } = getValueIndicator(priceChange);

  return (
    <TableCell className={`${classTW}`}>
      {breakpoint === "md" && (
        <span className="text-[var(--clr-text)]">
          {formattedPriceChangeInCurrency}
        </span>
      )}
      <div className={`flex items-center ${classTW}`}>
        {icon}
        {format(Math.abs(priceChange), {
          style: "percent",
          maximumFractionDigits: 2,
        })}
      </div>
    </TableCell>
  );
};

export default PercentageCell;
