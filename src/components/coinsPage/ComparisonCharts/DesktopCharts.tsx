import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import { ChartDataByCoin } from "@/services/types";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

export interface ChartProps {
  data?: ChartDataByCoin;
  selectedCoins: CarouselItemData[];
}

const DesktopCharts = ({ data, selectedCoins }: ChartProps) => {
  return (
    <div className="mb-5 flex justify-between font-grotesk">
      <CustomAreaChart chartData={data?.prices} coins={selectedCoins} />
      <CustomBarChart chartData={data?.volumes} coins={selectedCoins} />
    </div>
  );
};

export default DesktopCharts;
