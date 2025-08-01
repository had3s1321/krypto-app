import { useAppSelector } from "@/lib/hooks";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";
import DataPoint from "./DataPoint";

const PortfolioCoinAnalytics = ({ coin }: { coin: PortfolioCoinData }) => {
  const { currency } = useAppSelector((state) => state.user);

  const dataEntries = {
    "Current price": coin.price[currency],
    "24h%": coin.priceChangePercentage24h / 100,
    "Market cap vs volume":
      coin.totalVolume[currency] / coin.marketCap[currency],
    "Circ supply vs max supply": coin.maxSupply
      ? coin.circulatingSupply / coin.maxSupply
      : Infinity,
  };

  return (
    <>
      {Object.entries(dataEntries).map((entry, index) => (
        <DataPoint
          key={entry[1]}
          value={entry[1]}
          description={entry[0]}
          valueType={index === 0 ? "currency" : "percent"}
          hasIndicator={Boolean(index % 2)}
        />
      ))}
    </>
  );
};

export default PortfolioCoinAnalytics;
