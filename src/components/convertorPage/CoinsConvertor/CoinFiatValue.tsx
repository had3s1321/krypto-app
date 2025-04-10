import { useFormat } from "@/hooks/useFormat";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";

const CoinFiatValue = ({
  conversionCoin,
}: {
  conversionCoin?: ConversionCoinData;
}) => {
  const format = useFormat();

  if (!conversionCoin) return;

  return (
    <>
      1 {conversionCoin.symbol.toUpperCase()} ={" "}
      {format(conversionCoin.price, {
        style: "currency",
        maximumFractionDigits: 2,
      })}
    </>
  );
};

export default CoinFiatValue;
