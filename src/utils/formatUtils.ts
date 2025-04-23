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

export const getDate = (
  date?: number | string | Date,
  options: { isShort?: "short"; locale: string } = {
    locale: "en-US",
  },
) => {
  const currentDate = date ? new Date(date) : new Date();
  const formattedDate = new Intl.DateTimeFormat(options.locale || "en-US", {
    day: "numeric",
    month: options.isShort ? "numeric" : "long",
    year: "numeric",
  }).format(currentDate);
  return formattedDate;
};

export const getSevenDaysPercentage = (firstVal: number, lastVal: number) => {
  const result = (lastVal - firstVal) / firstVal;
  if (isNaN(result)) return 0;
  return result;
};
