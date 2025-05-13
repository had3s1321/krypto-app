"use client";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";
import MobileCoinsCarousel from "./MobileCoinsCarousel";
import CoinsCarousel from "./CoinsCarousel";

const Carousel = ({ data }: { data: CarouselItemData[] }) => {
  const breakpoint = useScreenBreakpoint();

  if (breakpoint === "md") return <MobileCoinsCarousel data={data} />;

  return <CoinsCarousel data={data} />;
};

export default Carousel;
