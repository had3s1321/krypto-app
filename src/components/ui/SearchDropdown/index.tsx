import { Coin, SearchBarData } from "@/utils/types/SearchBarData";

const SearchDropdown = ({
  data,
  handleCoinSelect,
}: {
  data?: SearchBarData;
  // eslint-disable-next-line no-unused-vars
  handleCoinSelect?: (coin: Coin) => void;
}) => {
  if (!data) return null;

  return (
    <ul className="scrollbar absolute top-9 z-50 -mt-1 max-h-96 w-full overflow-y-auto bg-[var(--clr-nav-foreground)]">
      {data &&
        data.coins.map((coin) => (
          <li
            key={coin.id}
            onMouseDown={(e) => {
              e.preventDefault();
              if (handleCoinSelect) handleCoinSelect(coin);
            }}
            className="px-4 py-3 hover:cursor-pointer hover:bg-[var(--clr-hover)]"
          >
            {coin.name}
          </li>
        ))}
    </ul>
  );
};

export default SearchDropdown;
