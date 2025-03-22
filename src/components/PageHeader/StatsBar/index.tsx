import { getStatsBarData } from "@/actions/getStatsBarData";
import StatsBarElement from "./StatusBarElement";

const StatsBar = async () => {
  const data = await getStatsBarData();

  return (
    <div className="flex h-14 w-full justify-center gap-8 bg-[var(--secondary-foreground)] text-xs text-[#ffffff;]">
      {data.map((item, i) => (
        <StatsBarElement
          key={i} // eslint-disable-line
          icon={item.icon}
          name={item.name}
          value={item.value}
          hasProgressBar={item.hasProgressBar}
          progressBarColor={item.progressBarColor}
          progressValue={item.progressValue}
          formatOptions={item.formatOptions}
        />
      ))}
    </div>
  );
};

export default StatsBar;
