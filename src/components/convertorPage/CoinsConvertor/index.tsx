import CoinConvertorCard from "./CoinConvertorCard";

const CoinsConvertor = () => {
  const bitcoin = {
    name: "Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    symbol: "btc",
    price: "82937",
  };
  const ethereum = {
    name: "Ethereum",
    image:
      "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    symbol: "eth",
    price: "1887.61",
  };
  return (
    <div className="mb-8 flex gap-6 font-grotesk">
      <CoinConvertorCard title="You sell" coin={bitcoin} />
      <CoinConvertorCard title="You buy" coin={ethereum} />
    </div>
  );
};

export default CoinsConvertor;
