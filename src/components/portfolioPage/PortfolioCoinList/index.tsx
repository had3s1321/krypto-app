import { portfolio_list } from "@/utils/mockData/portfolio_list";
import PortfolioCoin from "./PortfolioCoin";

const PortfolioCoinList = () => {
  return (
    <div className="flex flex-col gap-5">
      {portfolio_list.map((coin) => (
        <PortfolioCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default PortfolioCoinList;
