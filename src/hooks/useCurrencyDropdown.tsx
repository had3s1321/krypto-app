import { changeCurrency, Currencies } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { usePathname, useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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

export function useCurrencyDropdown(): {
  currency: string;
  currencies: CurrenciesConfig[];
  selectedCurrency: CurrenciesConfig;
  handleSelectedCurrency: (value: string) => void; // eslint-disable-line
} {
  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCurrency =
    currencies.find((el) => el.name === currency) || currencies[0];
  const handleSelectedCurrency = (value: string) => {
    const currenciesList = currencies.map((curr) => curr.name);
    if (currenciesList.includes(value as Currencies)) {
      dispatch(changeCurrency(value as Currencies));
    }
  };

  useEffect(() => {
    const regex = /^\/(?:\?currency=[A-Za-z]{3})?$/;
    const params = new URLSearchParams(searchParams.toString());
    setCookie("currency", currency);
    if (pathname.match(regex)) {
      params.set("currency", currency);
      router.push(`/?${params.toString()}`);
    }
  }, [currency]); // eslint-disable-line

  return { currency, currencies, selectedCurrency, handleSelectedCurrency };
}
