import { stats_bar } from "@/utils/mockData/status_bar";
import { parseStatsBarData } from "@/utils/parseStatsBarData";
import StatsBarElement from "./StatusBarElement";

const StatsBar = () => {
  const parsedData = parseStatsBarData(stats_bar);
  return (
    <div className="flex h-14 w-full justify-center gap-8 bg-[var(--secondary-foreground)] text-xs text-[#ffffff;]">
      {parsedData.map((el, i) => (
        <StatsBarElement
          key={i} //eslint disable line
          icon={el.icon}
          name={el.name}
          value={el.value}
          hasProgressBar={el.hasProgressBar}
        />
      ))}
    </div>
  );
};

export default StatsBar;
