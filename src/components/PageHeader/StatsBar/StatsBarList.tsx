"use client";

import { useIsMobile } from "@/hooks/useDeviceWidth";
import StatsBarElement, { StatsBarElementProps } from "./StatusBarElement";

const StatsBarList = ({ data }: { data: StatsBarElementProps[] }) => {
  const isMobile = useIsMobile();

  const list = isMobile ? data.slice(3) : data;

  return (
    <>
      {list.map((item, i) => (
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
    </>
  );
};

export default StatsBarList;
