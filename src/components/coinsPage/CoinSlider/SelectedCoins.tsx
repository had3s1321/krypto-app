"use client";

import Image from "next/image";
import { CircleX } from "lucide-react";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

interface SelectedCoinsProps {
  list: CarouselItemData[];
  // eslint-disable-next-line
  handleClick: (arg: CarouselItemData) => void | undefined;
}

const SelectedCoins = ({ list, handleClick }: SelectedCoinsProps) => {
  const breakpoint = useScreenBreakpoint();

  const isMobile = breakpoint === "md";

  return (
    <div className="absolute -mt-6 flex w-fit gap-1 md:-mt-10 md:gap-3">
      {list.map((el) => (
        <span
          key={el.name}
          onClick={() => handleClick(el)}
          className="flex items-center gap-1 rounded-sm bg-[var(--primary-foreground)] px-1 py-[2px] text-[var(--clr-nav-text)] hover:cursor-pointer md:px-2 md:py-1"
        >
          <Image
            src={el.image}
            alt={el.name}
            width={isMobile ? 16 : 20}
            height={isMobile ? 16 : 20}
          />
          {!isMobile && el.name}
          {!isMobile && <CircleX size={16} strokeWidth={1} />}
        </span>
      ))}
    </div>
  );
};

export default SelectedCoins;
