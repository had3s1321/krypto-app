import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeSelectedCoins, Currencies } from "@/lib/features/user/userSlice";
import { CarouselItemInterface } from "@/utils/types/CarouselItemInterface";

export function useCarousel(data: CarouselItemInterface[]): [
  Currencies,
  CarouselItemInterface[],
  (item: CarouselItemInterface) => void, //eslint-disable-line
] {
  const { selectedCoins, currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleSelectedCoins = (item: CarouselItemInterface) => {
    if (selectedCoins.length === 1 && item.id === selectedCoins[0].id) return;
    if (selectedCoins.some((el) => item.name === el.name)) {
      const newItems = selectedCoins.filter((el) => item.name !== el.name);
      dispatch(changeSelectedCoins(newItems));
      return;
    }
    if (selectedCoins.length > 1)
      dispatch(changeSelectedCoins([selectedCoins[1], item]));
    else dispatch(changeSelectedCoins([...selectedCoins, item]));
  };

  useEffect(() => {
    dispatch(changeSelectedCoins([data[0]]));
  }, []); //eslint-disable-line

  return [currency, selectedCoins, handleSelectedCoins];
}
