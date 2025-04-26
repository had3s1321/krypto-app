"use client";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useFormat } from "@/hooks/useFormat";
import PercentageCell from "./PercentageCell";
import ProgressCell from "./ProgressCell";
import ChartCell from "./ChartCell";
import NameCell from "./NameCell";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import { FadeStaggerSquares } from "@/components/ui/icons";
import { tableHeaderConfig } from "./tableHeaderConfig";

const CoinTable = () => {
  const { data, isFetching, lastCellRef } = useInfiniteScroll();
  const format = useFormat();
  const allResults = data?.pages.flat() ?? [];

  return (
    <>
      <Table className="w-full border-separate border-spacing-y-2 overflow-x-hidden">
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
              ref={allResults.length - 15 === index + 1 ? lastCellRef : null}
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
                {format(coin.price, { style: "currency" })}
              </TableCell>
              <PercentageCell data={coin.change1h} />
              <PercentageCell data={coin.change24h} />
              <PercentageCell data={coin.change7d} />
              <ProgressCell
                data1={coin.progress1.volume24h}
                data2={coin.progress1.marketCap}
                sign={coin.progress1.sign}
              />
              <ProgressCell
                data1={coin.progress2.circulatingSupply}
                data2={coin.progress2.totalSupply}
                sign={coin.progress2.sign}
              />
              <ChartCell data={coin.chart} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isFetching && (
        <div className="mx-auto h-8 w-8">
          <FadeStaggerSquares />
        </div>
      )}
    </>
  );
};

export default CoinTable;
