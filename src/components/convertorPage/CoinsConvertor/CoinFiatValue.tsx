import { useFormat } from "@/hooks/useFormat";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";

const CoinFiatValue = ({
  conversionCoin,
}: {
  conversionCoin?: ConversionCoinData | null;
}) => {
  const [format, currency] = useFormat();

  if (!conversionCoin) return null;

  return (
    <>
      1 {conversionCoin.symbol.toUpperCase()} ={" "}
      {format(conversionCoin.price[currency], {
        style: "currency",
        maximumFractionDigits: 2,
      })}
    </>
  );
};

export default CoinFiatValue;
