"use client";

import { useDebouncedInput } from "@/hooks/useDebouncedInput ";
import { Input } from "@/components/ui/shadcn/input";
import { SearchIcon } from "@/components/PageHeader/NavBar/icons";

const SearchBar = () => {
  const { data, value, handleChange, clearSearchResults } =
    useDebouncedInput(250);

  return (
    <div className="relative w-80 [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-2.5 [&>svg]:ml-3">
      <Input
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        onBlur={clearSearchResults}
        className="w-full border-none bg-[var(--clr-nav-foreground)] pl-10 pr-4 placeholder:text-inherit hover:bg-[var(--clr-hover)] focus-visible:ring-0"
      />
      <ul className="scrollbar absolute top-9 z-50 -mt-1 max-h-96 w-full overflow-y-auto bg-[var(--clr-nav-foreground)]">
        {data &&
          data.coins.map((el) => (
            <li
              key={el.id}
              className="px-4 py-3 hover:cursor-pointer hover:bg-[var(--clr-hover)]"
            >
              {el.name}
            </li>
          ))}
      </ul>
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
