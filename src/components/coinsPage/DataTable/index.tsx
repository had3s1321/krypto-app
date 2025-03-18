import { Progress } from "@/components/ui/shadcn/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import { roundNumber } from "@/utils/formatUtils";
import { coins_market_data } from "@/utils/mockData/coins_market_data";
import { parseTableData } from "@/utils/parseTableData";

const DataTable = () => {
  const tableHeaderConfig = [
    { name: "#", styles: "w-[3%]" },
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
        <TableRow>
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
            <TableCell className="rounded-l-md">{el.rank}</TableCell>
            <TableCell>
              {el.name} ({el.symbol})
            </TableCell>
            <TableCell>{el.price}</TableCell>
            <TableCell>{el.change1h.toFixed(2)}</TableCell>
            <TableCell>{el.change24h.toFixed(2)}</TableCell>
            <TableCell>{el.change7d.toFixed(2)}</TableCell>
            <TableCell>
              <div className="flex justify-between">
                <span>{roundNumber(el.progress1.volume24h, 2)}</span>
                <span>{roundNumber(el.progress1.marketCap, 2)}</span>
              </div>
              <Progress value={+roundNumber(el.progress1.volume24h, 2)} />
            </TableCell>
            <TableCell>
              <div className="flex justify-between">
                <span>{roundNumber(el.progress2.circulatingSupply, 0)}</span>
                <span>{roundNumber(el.progress2.totalSupply, 0)}</span>
              </div>
              <Progress />
            </TableCell>
            <TableCell className="rounded-l-md">Chart</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
