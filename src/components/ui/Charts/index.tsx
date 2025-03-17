import CustomAreaChart from "./AreaChart";
import CustomBarChart from "./BarChart";

const Charts = () => {
  return (
    <div className="flex justify-between">
      <CustomAreaChart />
      <CustomBarChart />
    </div>
  );
};

export default Charts;
