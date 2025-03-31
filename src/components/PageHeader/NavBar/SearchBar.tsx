"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/ui/shadcn/input";
import { SearchIcon } from "@/components/PageHeader/NavBar/icons";
import { getSearchBarData } from "@/actions/getSearchBarData";
import { SearchBarData } from "@/utils/types/SearchBarData";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<SearchBarData>(null);
  const debounceValue = useDebounce(value, 250);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!debounceValue) {
      setData(null);
      return;
    }

    getSearchBarData(debounceValue).then((response) => setData(response));
  }, [debounceValue]);

  return (
    <div className="relative w-80 [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-2.5 [&>svg]:ml-3">
      <Input
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        onBlur={() => setData(null)}
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
