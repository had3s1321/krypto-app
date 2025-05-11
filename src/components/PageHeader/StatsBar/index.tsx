import { getStatsBarData } from "@/actions/getStatsBarData";
import StatsBarList from "./StatsBarList";

const StatsBar = async () => {
  const data = await getStatsBarData();

  return (
    <div className="flex h-14 w-full justify-center gap-2 bg-[var(--secondary-foreground)] text-xs text-[#ffffff;] md:gap-8">
      <StatsBarList data={data} />
    </div>
  );
};

export default StatsBar;
