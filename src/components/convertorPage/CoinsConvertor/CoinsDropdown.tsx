import Image from "next/image";
import { Coin, SearchBarData } from "@/utils/types/SearchBarData";

interface CoinsDropdownProps {
  data: SearchBarData;
  /* eslint-disable no-unused-vars */
  handleNewCoin: (
    coin: Coin,
    handleBlur: () => void,
    isSelling?: boolean,
  ) => void;
  handleBlur: () => void;
  /* eslint-enable no-unused-vars */
  isSelling?: boolean;
}

const CoinsDropdown = ({
  data,
  handleNewCoin,
  handleBlur,
  isSelling,
}: CoinsDropdownProps) => {
  if (!data) return null;

  return (
    <ul className="scrollbar absolute top-9 z-50 mt-1 max-h-96 w-full overflow-y-auto rounded-b-lg bg-[var(--foreground)] shadow-lg">
      {data &&
        data.coins.map((coin) => (
          <li
            key={coin.id}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleNewCoin(coin, handleBlur, isSelling);
            }}
            className="flex items-center gap-2 px-4 py-3 hover:cursor-pointer hover:bg-[var(--clr-hover)]"
          >
            <Image
              src={coin.large || ""}
              alt={coin.name}
              width={28}
              height={24}
              className="shrink-0"
            />
            <span className="truncate text-sm leading-tight md:text-base">
              {coin.name} ({coin.symbol})
            </span>
          </li>
        ))}
    </ul>
  );
};

export default CoinsDropdown;
