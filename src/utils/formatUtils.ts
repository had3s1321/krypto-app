import { PageOptions } from "@/components/ui/PageTabs";

export const handlePageTabLink = (string: PageOptions) => {
  if (string === "Coins") return "/";
  return "/convertor";
};

export const getTime = (locale?: string, dateStamp?: number) => {
  const currentDate = dateStamp ? new Date(dateStamp) : new Date();
  const formattedTime = new Intl.DateTimeFormat(locale || "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(currentDate);
  return formattedTime;
};

export const getDate = (locale?: string, dateStamp?: number) => {
  const currentDate = dateStamp ? new Date(dateStamp) : new Date();
  const formattedDate = new Intl.DateTimeFormat(locale || "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate);
  return formattedDate;
};

export const getSevenDaysPercentage = (firstVal: number, lastVal: number) => {
  const result = ((lastVal - firstVal) / firstVal) * 100;
  if (isNaN(result)) return 0;
  return result;
};
