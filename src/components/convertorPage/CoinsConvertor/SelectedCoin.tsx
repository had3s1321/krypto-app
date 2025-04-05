import Image from "next/image";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";

const SelectedCoin = ({
  conversionCoin,
}: {
  conversionCoin: ConversionCoinData;
}) => {
  return (
    <div className="absolute left-0 top-0 mt-1 flex gap-2">
      <Image
        src={conversionCoin.image}
        alt={conversionCoin.name}
        width={28}
        height={24}
      />
      <span>
        {conversionCoin.name} ({conversionCoin.symbol})
      </span>
    </div>
  );
};

export default SelectedCoin;
