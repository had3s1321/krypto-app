"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/shadcn/input";
import { SearchIcon } from "@/components/ui/icons";
import { getSearchBarData } from "@/actions/getSearchBarData";
import { SearchBarData } from "@/utils/types/SearchBarData";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<SearchBarData>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getSearchBarData(value).then((response) => setData(response));
  }, [value]);

  return (
    <div className="relative w-80 [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-2.5 [&>svg]:ml-3">
      <Input
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        className="w-full border-none bg-[var(--clr-nav-foreground)] pl-10 pr-4 placeholder:text-inherit hover:bg-[var(--clr-hover)]"
      />
      <ul className="absolute top-9 w-full bg-[var(--clr-nav-foreground)]">
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
