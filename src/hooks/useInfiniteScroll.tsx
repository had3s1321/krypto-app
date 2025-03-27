import { useCallback, useRef } from "react";
import { useGetCoinTableDataInfiniteQuery } from "@/services/coingeckoApi";

export function useInfiniteScroll() {
  const { data, isFetching, fetchNextPage } =
    useGetCoinTableDataInfiniteQuery("");

  const observer = useRef<IntersectionObserver | null>(null);

  const handleNextPage = async () => {
    await fetchNextPage();
    requestAnimationFrame(() => window.scrollY);
  };

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
    [isFetching],
  );

  return { data, isFetching, lastCellRef };
}
