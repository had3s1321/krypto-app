"use client";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import StatsBarElement, { StatsBarElementProps } from "./StatusBarElement";

const StatsBarList = ({ data }: { data: StatsBarElementProps[] }) => {
  const breakpoint = useScreenBreakpoint();

  const list =
    breakpoint === "md"
      ? data.slice(3)
      : breakpoint === "lg"
        ? data.slice(2)
        : data;

  return (
    <ul className="mx-4 flex h-full max-w-full items-center justify-between gap-0 md:justify-center md:gap-8">
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
    </ul>
  );
};

export default StatsBarList;
