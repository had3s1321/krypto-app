import { getStatsBarData } from "@/actions/getStatsBarData";
import StatsBarElement from "./StatusBarElement";

const StatsBar = async () => {
  const data = await getStatsBarData();

  return (
    <div className="flex h-14 w-full justify-center gap-8 bg-[var(--secondary-foreground)] text-xs text-[#ffffff;]">
      {data.map((el, i) => (
        <StatsBarElement
          key={i} // eslint-disable-line
          icon={el.icon}
          name={el.name}
          value={el.value}
          hasProgressBar={el.hasProgressBar}
          progressBarColor={el.progressBarColor}
        />
      ))}
    </div>
  );
};

export default StatsBar;
