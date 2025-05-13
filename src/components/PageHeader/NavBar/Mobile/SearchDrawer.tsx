"use client";

import { useDebouncedSearch } from "@/hooks/useDebouncedSearch ";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer";
import { Input } from "@/components/ui/shadcn/input";
import { SearchIcon } from "../icons";
import SearchDropdown from "@/components/ui/SearchDropdown";

const SearchDrawer = () => {
  const { data, value, handleChange, clearSearchResults } =
    useDebouncedSearch(250);

  return (
    <Drawer>
      <DrawerTrigger className="rounded-md bg-[var(--clr-nav-foreground)] px-4 !pb-0 shadow-lg focus-visible:outline-none">
        <SearchIcon />
      </DrawerTrigger>
      <DrawerContent className="h-4/5 text-[var(--clr-nav-text)]">
        <DrawerHeader className="text-left">
          <DrawerTitle hidden>Search for a coin...</DrawerTitle>
          <Input
            value={value}
            placeholder="Search..."
            onChange={handleChange}
            onBlur={clearSearchResults}
            className="h-full w-full border-none bg-[var(--clr-nav-foreground)] px-3 py-3 pr-4 shadow-lg placeholder:text-inherit hover:bg-[var(--clr-hover)] focus:placeholder:text-transparent focus-visible:ring-0"
          />
          {!data && <span>No results, please search for a coin.</span>}
          {data && <SearchDropdown data={data} />}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
