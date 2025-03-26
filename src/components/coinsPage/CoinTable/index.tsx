"use client";

import ProgressCell from "./ProgressCell";
import NameCell from "./NameCell";
import ChartCell from "./ChartCell";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import { useGetCoinTableDataInfiniteQuery } from "@/services/coingeckoApi";

const CoinTable = () => {
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

  // eslint-disable-next-line
  const { data, isFetching, fetchNextPage } =
    useGetCoinTableDataInfiniteQuery("");
  // eslint-disable-next-line
  const handleNextPage = async () => await fetchNextPage();

  const allResults = data?.pages.flat() ?? [];

  return (
    <Table className="w-full border-separate border-spacing-y-2">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="text-[var(--clr-nav-text)]">
          {tableHeaderConfig.map((header) => (
            <TableHead key={header.name} className={header.styles}>
              {header.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {allResults.map((coin) => (
          <TableRow
            key={coin.symbol}
            className="bg mb-8 h-16 bg-[var(--foreground)]"
          >
            <TableCell className="rounded-l-md text-center font-semibold text-[var(--clr-text)]">
              {coin.rank}
            </TableCell>
            <NameCell
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
            />
            <TableCell className="font-semibold text-[var(--clr-text)]">
              {coin.price}
            </TableCell>
            <TableCell>{coin.change1h.toFixed(2)}</TableCell>
            <TableCell>{coin.change24h.toFixed(2)}</TableCell>
            <TableCell>{coin.change7d.toFixed(2)}</TableCell>
            <ProgressCell
              data1={coin.progress1.volume24h}
              data2={coin.progress1.marketCap}
            />
            <ProgressCell
              data1={coin.progress2.circulatingSupply}
              data2={coin.progress2.totalSupply}
            />
            <ChartCell data={coin.chart} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CoinTable;
