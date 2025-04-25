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
  const format = useFormat();

  return (
    <CardContent className="flex flex-col items-start justify-center gap-1 p-3 text-[var(--clr-text)]">
      <span className="text-xl font-medium hover:cursor-pointer">
        {coin.name} ({coin.symbol})
      </span>
      <span className="flex hover:cursor-pointer">
        <span className="hover:cursor-pointer">
          {format(coin.price, {
            style: "decimal",
          })}{" "}
          {currency}
        </span>
        <span
          className={`ml-2 flex items-center hover:cursor-pointer ${classTW}`}
        >
          {icon}
          {format(Math.abs(coin.priceChange), {
            style: "percent",
            maximumFractionDigits: 2,
          })}
        </span>
      </span>
    </CardContent>
  );
};

export default CoinInfo;
