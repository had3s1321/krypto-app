"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";
import CarouselTitle from "./CarouselTitle";
import Image from "next/image";
import { FadeStaggerSquares } from "@/components/ui/icons";
import SelectedCoins from "./SelectedCoins";

const MobileCoinsCarousel = ({ data }: { data: CarouselItemData[] }) => {
  const { selectedCoins, compare, isLoading, handleSelectedCoins } =
    useCarousel(data);

  if (isLoading)
    return (
      <>
        <CarouselTitle compare={compare} />
        <div className="mb-4 h-8 w-full">
          <div className="mx-auto h-4 w-4">
            <FadeStaggerSquares />
          </div>
        </div>
      </>
    );

  return (
    <>
      <CarouselTitle compare={compare} />
      <ul className="no-scrollbar relative mb-8 flex gap-2 overflow-x-auto text-[var(--clr-text)]">
        {data.map((coin) => {
          const isSelected = selectedCoins.some(
            (item) => item.name === coin.name,
          )
            ? "bg-[var(--primary-foreground)] text-[var(--clr-light-perm)]"
            : "bg-[var(--foreground)]";
          return (
            <li
              key={coin.id}
              onClick={() => handleSelectedCoins(coin)}
              className={`flex flex-none items-center justify-center gap-1 rounded-md border-none ${isSelected} px-2 py-1`}
            >
              <Image src={coin.image} alt={coin.name} width={24} height={24} />
              {coin.symbol.toLocaleUpperCase()}
            </li>
          );
        })}
      </ul>
      <SelectedCoins list={selectedCoins} handleClick={handleSelectedCoins} />
    </>
  );
};

export default MobileCoinsCarousel;
