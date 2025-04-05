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
  return (
    <ul className="scrollbar absolute top-9 z-50 mt-1 max-h-96 w-full overflow-y-auto bg-[var(--foreground)]">
      {data &&
        data.coins.map((coin) => (
          <li
            key={coin.id}
            onClick={(e) => {
              e.stopPropagation();
              handleNewCoin(coin, handleBlur, isSelling);
            }}
            className="flex gap-2 px-4 py-3 hover:cursor-pointer hover:bg-[var(--clr-hover)]"
          >
            <Image
              src={coin.large || ""}
              alt={coin.name}
              width={28}
              height={24}
            />
            {coin.name} ({coin.symbol})
          </li>
        ))}
    </ul>
  );
};

export default CoinsDropdown;
