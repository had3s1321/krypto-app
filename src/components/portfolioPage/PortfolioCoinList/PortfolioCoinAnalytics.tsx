import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";
import DataPoint from "./DataPoint";

const PortfolioCoinAnalytics = ({ coin }: { coin: PortfolioCoinData }) => {
  const dataEntries = {
    "Current price": coin.price,
    "24h%": coin.priceChangePercentage24h / 100,
    "Market cap vs volume": coin.totalVolume / coin.marketCap,
    "Circ supply vs max supply": coin.maxSupply
      ? coin.circulatingSupply / coin.maxSupply
      : 0,
  };

  return (
    <>
      {Object.entries(dataEntries).map((entry, index) => (
        <DataPoint
          key={entry[1]}
          value={entry[1]}
          description={entry[0]}
          valueType={index === 0 ? "currency" : "percent"}
        />
      ))}
    </>
  );
};

export default PortfolioCoinAnalytics;
