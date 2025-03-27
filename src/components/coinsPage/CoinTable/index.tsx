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
import { tableHeaderConfig } from "./tableHeaderConfig";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const CoinTable = () => {
  const { data, isFetching, lastCellRef } = useInfiniteScroll();

  const allResults = data?.pages.flat() ?? [];

  return (
    <Table className="w-full border-separate border-spacing-y-2 overflow-x-hidden">
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
        {allResults.map((coin, index) => (
          <TableRow
            key={coin.id}
            ref={allResults.length === index + 1 ? lastCellRef : null}
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
            <TableCell>{coin.change1h && coin.change1h.toFixed(2)}</TableCell>
            <TableCell>{coin.change24h && coin.change24h.toFixed(2)}</TableCell>
            <TableCell>{coin.change7d && coin.change7d.toFixed(2)}</TableCell>
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
        {isFetching && (
          <TableRow>
            <TableCell className="w-full">Fetching some data</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CoinTable;
