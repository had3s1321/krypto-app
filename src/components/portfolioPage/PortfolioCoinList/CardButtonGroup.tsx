"use client";

import { useTheme } from "next-themes";
import { useAppDispatch } from "@/lib/hooks";
import { removeAsset } from "@/lib/features/portfolio/portfolioSlice";
import { TrashDark, TrashLight } from "./icons";

const CardButtonGroup = ({ coinId }: { coinId: string }) => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const handleClick = () => {
    dispatch(removeAsset(coinId));
  };

  return (
    <button
      onClick={handleClick}
      className="absolute right-4 top-0 -mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--clr-nav-bg)] hover:cursor-pointer"
    >
      {isLight ? <TrashLight /> : <TrashDark />}
    </button>
  );
};

export default CardButtonGroup;
