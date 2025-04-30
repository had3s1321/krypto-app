import { MouseEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeSelectedCoins, Currencies } from "@/lib/features/user/userSlice";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

export interface Compare {
  isCompare: boolean;
  handleCompare: MouseEventHandler<HTMLButtonElement>;
}

interface CarouselHook {
  currency: Currencies;
  selectedCoins: CarouselItemData[];
  compare: Compare;
  handleSelectedCoins: (item: CarouselItemData) => void; //eslint-disable-line
}

export function useCarousel(data: CarouselItemData[]): CarouselHook {
  const { selectedCoins, currency } = useAppSelector((state) => state.user);
  const [isCompare, setIsCompare] = useState(false);
  const dispatch = useAppDispatch();

  const handleSelectedCoins = (item: CarouselItemData) => {
    if (isCompare) {
      if (selectedCoins.length === 1 && item.id === selectedCoins[0].id) return;
      if (selectedCoins.some((el) => item.name === el.name)) {
        const newItems = selectedCoins.filter((el) => item.name !== el.name);
        dispatch(changeSelectedCoins(newItems));
        return;
      }
      if (selectedCoins.length > 1)
        dispatch(changeSelectedCoins([selectedCoins[1], item]));
      else dispatch(changeSelectedCoins([...selectedCoins, item]));
    } else {
      dispatch(changeSelectedCoins([item]));
    }
  };

  const handleCompare = () => {
    if (isCompare) dispatch(changeSelectedCoins([selectedCoins[0]]));
    setIsCompare(!isCompare);
  };

  useEffect(() => {
    dispatch(changeSelectedCoins([data[0]]));
  }, []); //eslint-disable-line

  useEffect(() => {
    if (!data.length || !selectedCoins.length) return;
    const updatedSelected = selectedCoins.map((selected) =>
      data.find((d) => d.id === selected.id),
    );
    if (updatedSelected.length > 0) {
      dispatch(changeSelectedCoins(updatedSelected));
    }
  }, [data]); //eslint-disable-line

  return {
    currency,
    selectedCoins,
    compare: {
      isCompare,
      handleCompare,
    },
    handleSelectedCoins,
  };
}
