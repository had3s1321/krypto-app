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

export const trimDecimals = (value: number) => {
  if (value === 0) return "0";
  if (value < 1) {
    return Number(value.toPrecision(2)).toString();
  }
  return value.toFixed(2).replace(/\.?0+$/, "");
};

export const getTimeRangeInUNIX = (interval: string) => {
  const HOUR = 60 * 60;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;
  const today = Math.round(Date.now() / 1000);

  switch (interval) {
    case "1D":
      return { from: today - DAY, to: today };
    case "7D":
      return { from: today - 7 * DAY, to: today };
    case "14D":
      return { from: today - 14 * DAY, to: today };
    case "1M":
      return { from: today - MONTH, to: today };
    case "1Y":
      return { from: today - YEAR, to: today };
    default:
      return { from: today - DAY, to: today };
  }
};
