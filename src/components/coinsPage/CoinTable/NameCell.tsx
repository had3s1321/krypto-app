import Image from "next/image";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { TableCell } from "@/components/ui/shadcn/table";
import Link from "next/link";

interface NameCellProps {
  id: string;
  image: string;
  name: string;
  symbol: string;
}

const NameCell = ({ id, image, name, symbol }: NameCellProps) => {
  const breakpoint = useScreenBreakpoint();

  const imageSize = breakpoint === "md" ? 24 : 28;
  const formattedSymbol =
    breakpoint === "md" ? symbol.toUpperCase() : `(${symbol.toUpperCase()})`;

  return (
    <TableCell className="w-[35%] rounded-l-md font-semibold text-[var(--clr-text)] md:w-[20%] md:rounded-l-none">
      <Link
        href={`/coin/${id}`}
        className="flex w-full items-center gap-2 hover:cursor-pointer md:gap-4"
      >
        <Image
          src={image}
          alt={name}
          width={imageSize}
          height={imageSize}
          className="shrink-0"
        />
        <div className="flex w-full flex-col-reverse items-start gap-0 overflow-hidden text-ellipsis md:flex-row md:items-center md:gap-1">
          <span className="hidden overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-pointer md:block">
            {name}
          </span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-pointer">
            {formattedSymbol}
          </span>
        </div>
      </Link>
    </TableCell>
  );
};

export default NameCell;
