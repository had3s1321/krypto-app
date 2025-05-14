import Image from "next/image";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { TableCell } from "@/components/ui/shadcn/table";

interface NameCellProps {
  image: string;
  name: string;
  symbol: string;
}

const NameCell = ({ image, name, symbol }: NameCellProps) => {
  const breakpoint = useScreenBreakpoint();
  const formattedSymbol =
    breakpoint === "md" ? symbol.toUpperCase() : `(${symbol.toUpperCase()})`;

  return (
    <TableCell className="w-[35%] font-semibold text-[var(--clr-text)] md:w-[20%]">
      <div className="flex w-full items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={28}
          height={28}
          className="shrink-0"
        />
        <div className="flex w-full flex-col-reverse items-start overflow-hidden text-ellipsis md:flex-row md:items-center">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {formattedSymbol}
          </span>
        </div>
      </div>
    </TableCell>
  );
};

export default NameCell;
