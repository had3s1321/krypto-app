import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import { ChartDataByCoin } from "@/services/types";
import { CarouselItemData } from "@/utils/types/CoinsListMarketData";

export interface ChartProps {
  data?: ChartDataByCoin;
  selectedCoins: CarouselItemData[];
  interval: string;
}

const DesktopCharts = ({ data, selectedCoins, interval }: ChartProps) => {
  return (
    <div className="mb-5 flex justify-between font-grotesk">
      <CustomAreaChart
        chartData={data?.prices}
        coins={selectedCoins}
        interval={interval}
      />
      <CustomBarChart
        chartData={data?.volumes}
        coins={selectedCoins}
        interval={interval}
      />
    </div>
  );
};

export default DesktopCharts;
