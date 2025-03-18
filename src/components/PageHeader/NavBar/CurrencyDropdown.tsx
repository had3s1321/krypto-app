"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import {
  DollarIcon,
  DropdownDownIcon,
  EuroIcon,
  PoundSterlingIcon,
} from "@/components/ui/icons";

interface Currencies {
  name: "USD" | "EUR" | "GBP";
  icon: React.ReactNode;
}

const currencies: Currencies[] = [
  { name: "USD", icon: <DollarIcon /> },
  { name: "EUR", icon: <EuroIcon /> },
  { name: "GBP", icon: <PoundSterlingIcon /> },
];

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleSelectedCurrency = (value: string) => {
    const selectedCurrency = currencies.find((el) => el.name === value);
    if (selectedCurrency) setSelectedCurrency(selectedCurrency);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 items-center justify-center gap-2 rounded-md bg-[var(--clr-nav-foreground)] p-3 hover:bg-[var(--clr-hover)] focus-visible:outline-none">
        <span className="flex">
          {selectedCurrency.icon}
          {selectedCurrency.name}
        </span>
        <DropdownDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none bg-[var(--clr-nav-foreground)]">
        <DropdownMenuRadioGroup
          value={selectedCurrency.name}
          onValueChange={handleSelectedCurrency}
          className="[&>[data-state=checked]]:hidden"
        >
          {currencies.map((el) => (
            <DropdownMenuRadioItem
              key={el.name}
              value={el.name}
              className="flex"
            >
              <span className="-ml-1 flex items-center justify-center gap-0.5 bg-[var(--clr-nav-foreground)] py-2 pl-5 pr-7 text-[var(--clr-nav-text)] hover:bg-[var(--clr-hover)]">
                {el.icon}
                {el.name}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyDropdown;
