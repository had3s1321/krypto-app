import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";
import { parseChartData } from "@/utils/parseChartData";
import { btc_chart_24h_data } from "@/utils/mockData/btc_chart_24h_data";
import { eth_chart_24h_data } from "@/utils/mockData/eth_chart_24h_data";

export type ParsedChartData = {
  time: string;
  value: number;
}[];

const Charts = () => {
  const areaChartData = parseChartData(btc_chart_24h_data, "prices");
  const barChartData = parseChartData(eth_chart_24h_data, "total_volumes");

  return (
    <div className="flex justify-between font-grotesk">
      <CustomAreaChart chartData={areaChartData} />
      <CustomBarChart chartData={barChartData} />
    </div>
  );
};

export default Charts;
