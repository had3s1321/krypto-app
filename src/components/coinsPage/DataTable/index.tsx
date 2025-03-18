import ProgressCell from "./ProgressCell";
import NameCell from "./NameCell";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseTableData } from "@/utils/parseTableData";

const DataTable = () => {
  const tableHeaderConfig = [
    { name: "#", styles: "w-[3%] text-center" },
    { name: "Name", styles: "w-[20%]" },
    { name: "Price", styles: "w-[8%]" },
    { name: "1h%", styles: "w-[8%]" },
    { name: "24h%", styles: "w-[8%]" },
    { name: "7d%", styles: "w-[8%]" },
    { name: "24h volume / Market Cap", styles: "w-[15%]" },
    { name: "Circulating / Total supply", styles: "w-[15%]" },
    { name: "Last 7d", styles: "w-[15%]" },
  ];

  const data = parseTableData(coins_market_data);

  return (
    <Table className="w-full border-separate border-spacing-y-2">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="text-[var(--clr-nav-text)]">
          {tableHeaderConfig.map((el) => (
            <TableHead key={el.name} className={el.styles}>
              {el.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((el) => (
          <TableRow
            key={el.symbol}
            className="bg mb-8 h-16 bg-[var(--foreground)]"
          >
            <TableCell className="rounded-l-md text-center font-semibold text-[var(--clr-text)]">
              {el.rank}
            </TableCell>
            <NameCell image={el.image} name={el.name} symbol={el.symbol} />
            <TableCell className="font-semibold text-[var(--clr-text)]">
              {el.price}
            </TableCell>
            <TableCell>{el.change1h.toFixed(2)}</TableCell>
            <TableCell>{el.change24h.toFixed(2)}</TableCell>
            <TableCell>{el.change7d.toFixed(2)}</TableCell>
            <ProgressCell
              data1={el.progress1.volume24h}
              data2={el.progress1.marketCap}
            />
            <ProgressCell
              data1={el.progress2.circulatingSupply}
              data2={el.progress2.totalSupply}
            />
            {/* <ChartCell data={el.chart} /> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
