"use client";

import { useCurrencyDropdown } from "@/hooks/useCurrencyDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { DropdownDownIcon } from "@/components/PageHeader/NavBar/icons";

const CurrencyDropdown = () => {
  const { currency, currencies, selectedCurrency, handleSelectedCurrency } =
    useCurrencyDropdown();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-full items-center justify-center gap-2 rounded-md bg-[var(--clr-nav-foreground)] px-3 shadow-lg hover:bg-[var(--clr-hover)] focus-visible:outline-none">
        <span className="flex items-center gap-1">
          {selectedCurrency.icon}
          {selectedCurrency.name.toUpperCase()}
        </span>
        <DropdownDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-b-md border-none bg-[var(--clr-nav-foreground)]">
        <DropdownMenuRadioGroup
          value={currency}
          onValueChange={handleSelectedCurrency}
          className="[&>[data-state=checked]]:hidden"
        >
          {currencies.map((el) => (
            <DropdownMenuRadioItem
              key={el.name}
              value={el.name}
              className="mx-3 flex"
            >
              <span className="-mx-5 flex items-center justify-center gap-1 bg-[var(--clr-nav-foreground)] py-2 pl-5 pr-11 text-[var(--clr-nav-text)] hover:cursor-pointer hover:bg-[var(--clr-hover)]">
                {el.icon}
                {el.name.toUpperCase()}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyDropdown;
