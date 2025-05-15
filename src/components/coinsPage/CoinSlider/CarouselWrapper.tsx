"use client";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";
import MobileCoinCarousel from "./MobileCoinCarousel";
import CoinCarousel from "./CoinCarousel";

const CarouselWrapper = ({ data }: { data: CarouselItemData[] }) => {
  const breakpoint = useScreenBreakpoint();

  if (breakpoint === "md") return <MobileCoinCarousel data={data} />;

  return <CoinCarousel data={data} />;
};

export default CarouselWrapper;
