"use client";

import { useState } from "react";
import { Input } from "@/components/ui/shadcn/input";
import { search_bar } from "@/utils/mockData/search_bar";
import { SearchIcon } from "@/components/ui/icons";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { coins } = search_bar;
  const resultsList = value
    ? coins.filter((el) => el.name.toLowerCase().includes(value))
    : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="relative w-80 [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-3 [&>svg]:ml-3">
      <Input
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        className="w-full border-none bg-[var(--clr-nav-foreground)] pl-10 pr-4 placeholder:text-inherit hover:bg-[var(--clr-hover)]"
      />
      <ul className="absolute top-9 w-full bg-[var(--clr-nav-foreground)]">
        {resultsList.map((el) => (
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
