"use client";

import { useRouter } from "next/navigation";
import { useFormat } from "@/hooks/useFormat";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
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
  const router = useRouter();
  const [format] = useFormat();
  const allResults = data?.pages.flat() ?? [];
  const breakpoint = useScreenBreakpoint();

  const tableHeader =
    breakpoint === "xl"
      ? tableHeaderConfig
      : breakpoint === "md"
        ? tableHeaderConfig.slice(1, 5)
        : tableHeaderConfig.slice(0, 6);
  const isLargeScreen = breakpoint === "lg";
  const isExtraLargeSCreen = breakpoint == "xl";

  return (
    <>
      <Table className="w-full table-fixed border-separate border-spacing-y-2 overflow-x-hidden font-grotesk">
        <TableHeader>
          <TableRow className="text-[var(--clr-nav-text)]">
            {tableHeader.map((header) => (
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
              onClick={() => router.push(`/coin/${coin.id}`)}
              className="bg mb-8 h-16 bg-[var(--foreground)] shadow-sm transition-transform hover:scale-105 hover:cursor-pointer"
            >
              {(isLargeScreen || isExtraLargeSCreen) && (
                <TableCell className="rounded-l-md text-center font-semibold text-[var(--clr-text)]">
                  {coin.rank}
                </TableCell>
              )}
              <NameCell
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
              />
              <TableCell className="font-semibold text-[var(--clr-text)]">
                {format(coin.price, {
                  style: "currency",
                  maximumFractionDigits: breakpoint === "md" ? 0 : 2,
                  minimumFractionDigits: 0,
                })}
              </TableCell>
              <PercentageCell priceChange={coin.change1h} price={coin.price} />
              <PercentageCell priceChange={coin.change24h} price={coin.price} />
              {(isLargeScreen || isExtraLargeSCreen) && (
                <PercentageCell priceChange={coin.change7d} />
              )}
              {isExtraLargeSCreen && (
                <>
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
                </>
              )}
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
