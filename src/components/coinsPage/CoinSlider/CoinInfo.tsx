import { CardContent } from "@/components/ui/shadcn/card";
import { useFormat } from "@/hooks/useFormat";
import { Currencies } from "@/lib/features/user/userSlice";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

interface CoinInfoProps {
  coin: CarouselItemData;
  currency: Currencies;
  icon: React.ReactNode;
  classTW: string;
}

const CoinInfo = ({ coin, currency, icon, classTW }: CoinInfoProps) => {
  const [format] = useFormat();

  const formattedPrice = format(coin.price, {
    style: "decimal",
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  const formattedChange = format(Math.abs(coin.priceChange), {
    style: "percent",
    maximumFractionDigits: 2,
  });

  return (
    <CardContent className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1 p-3 text-[var(--clr-text)]">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium hover:cursor-pointer lg:text-xl">
          {coin.name} ({coin.symbol})
        </span>
      </div>
      <div className="flex hover:cursor-pointer">
        <span className="flex gap-1 text-xs hover:cursor-pointer lg:text-sm">
          <span>{formattedPrice}</span>
          <span>{currency.toUpperCase()}</span>
        </span>
        <span
          className={`ml-2 flex items-center text-xs hover:cursor-pointer lg:text-sm ${classTW}`}
        >
          {icon}
          {formattedChange}
        </span>
      </div>
    </CardContent>
  );
};

export default CoinInfo;
