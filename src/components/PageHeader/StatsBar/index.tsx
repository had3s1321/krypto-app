import { getStatsBarData } from "@/actions/getStatsBarData";
import StatsBarList from "./StatsBarList";

const StatsBar = async () => {
  const data = await getStatsBarData();

  return (
    <div className="mr-0 h-14 w-full bg-[var(--secondary-foreground)] text-xs text-[#ffffff]">
      <StatsBarList data={data} />
    </div>
  );
};

export default StatsBar;
