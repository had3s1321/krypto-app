import { PageOptions } from "@/components/ui/PageTabs";

export const handlePageTabLink = (string: PageOptions) => {
  if (string === "Coins") return "/";
  return "/convertor";
};

export const getTime = (dateStamp: number) => {
  const date = new Date(dateStamp);
  const hours = date.getUTCHours().toLocaleString();
  const minutes = date.getUTCMinutes().toLocaleString();
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
};

export const getSevenDaysPercentage = (firstVal: number, lastVal: number) => {
  return ((lastVal - firstVal) / firstVal) * 100;
};
