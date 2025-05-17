import Image from "next/image";
import { ConversionCoinData } from "@/utils/types/IndividualCoinData";

const SelectedCoin = ({
  conversionCoin,
  onClick,
}: {
  conversionCoin: ConversionCoinData;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-0 mt-1 flex gap-2 hover:cursor-text"
    >
      <Image
        src={conversionCoin.image}
        alt={conversionCoin.name}
        width={28}
        height={24}
      />
      <span className="hover:cursor-text">
        {conversionCoin.name} ({conversionCoin.symbol.toUpperCase()})
      </span>
    </div>
  );
};

export default SelectedCoin;
