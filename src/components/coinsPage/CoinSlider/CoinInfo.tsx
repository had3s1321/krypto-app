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
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  const formattedChange = format(Math.abs(coin.priceChange), {
    style: "percent",
    maximumFractionDigits: 2,
  });

  return (
    <CardContent className="flex flex-col items-start justify-center gap-1 p-3 text-[var(--clr-text)]">
      <span className="text-xl font-medium hover:cursor-pointer">
        {coin.name} ({coin.symbol})
      </span>
      <div className="flex hover:cursor-pointer">
        <span className="flex gap-1 hover:cursor-pointer">
          <span>{formattedPrice}</span>
          <span>{currency.toUpperCase()}</span>
        </span>
        <span
          className={`ml-2 flex items-center hover:cursor-pointer ${classTW}`}
        >
          {icon}
          {formattedChange}
        </span>
      </div>
    </CardContent>
  );
};

export default CoinInfo;
