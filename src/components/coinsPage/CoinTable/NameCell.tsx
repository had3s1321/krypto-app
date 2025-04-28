import { TableCell } from "@/components/ui/shadcn/table";
import Image from "next/image";

const NameCell = ({
  image,
  name,
  symbol,
}: {
  image: string;
  name: string;
  symbol: string;
}) => {
  return (
    <TableCell className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-[var(--clr-text)]">
      <Image
        src={image}
        alt={name}
        width={24}
        height={24}
        className="float-start mr-4"
      />
      <span className="inline-block hover:cursor-pointer">
        {name} ({symbol})
      </span>
    </TableCell>
  );
};

export default NameCell;
