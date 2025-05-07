import { useCallback, useRef } from "react";
import { useAppSelector } from "@/lib/hooks";

import { useGetCoinTableDataInfiniteQuery } from "@/services/coingeckoApi";

export function useInfiniteScroll() {
  const { currency } = useAppSelector((state) => state.user);
  const { data, isFetching, fetchNextPage } = useGetCoinTableDataInfiniteQuery({
    currency,
  });

  const observer = useRef<IntersectionObserver | null>(null);

  const handleNextPage = useCallback(async () => {
    await fetchNextPage();
    requestAnimationFrame(() => window.scrollY);
  }, [fetchNextPage]);

  const lastCellRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handleNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, handleNextPage],
  );

  return { data, isFetching, lastCellRef };
}
