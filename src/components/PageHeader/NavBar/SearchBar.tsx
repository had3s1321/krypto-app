"use client";

import { useRouter } from "next/navigation";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch ";
import { Input } from "@/components/ui/shadcn/input";
import { SearchIcon } from "@/components/PageHeader/NavBar/icons";
import SearchDropdown from "@/components/ui/SearchDropdown";

const SearchBar = () => {
  const { data, value, handleChange, clearSearchResults } =
    useDebouncedSearch(250);
  const router = useRouter();

  const handleSelect = (coinId: string) => {
    router.push(`/coin/${coinId}`);
    clearSearchResults();
  };

  return (
    <div className="relative w-80 [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-3 [&>svg]:ml-3">
      <Input
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        onBlur={clearSearchResults}
        className="h-full w-full border-none bg-[var(--clr-nav-foreground)] !py-0 pl-10 pr-4 shadow-lg placeholder:text-inherit hover:bg-[var(--clr-hover)] focus:placeholder:text-transparent focus-visible:ring-0"
      />
      <SearchDropdown data={data} handleClick={handleSelect} />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
