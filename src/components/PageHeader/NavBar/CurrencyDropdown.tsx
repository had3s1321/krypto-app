"use client";

import { changeCurrency, Currencies } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { DropdownDownIcon } from "@/components/PageHeader/NavBar/icons";
import { BadgeDollarSign, BadgeEuro, BadgePoundSterling } from "lucide-react";

interface CurrenciesConfig {
  name: Currencies;
  icon: React.ReactNode;
}

const currencies: CurrenciesConfig[] = [
  { name: "usd", icon: <BadgeDollarSign size={16} /> },
  { name: "eur", icon: <BadgeEuro size={16} /> },
  { name: "gbp", icon: <BadgePoundSterling size={16} /> },
];

const CurrencyDropdown = () => {
  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCurrency =
    currencies.find((el) => el.name === currency) || currencies[0];
  const handleSelectedCurrency = (value: string) => {
    const currenciesList = currencies.map((curr) => curr.name);
    if (currenciesList.includes(value as Currencies)) {
      dispatch(changeCurrency(value as Currencies));
      const params = new URLSearchParams(searchParams.toString());
      setCookie("currency", currency);
      params.set("currency", currency);
      router.push(`/?${params.toString()}`);
    }
  };

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
