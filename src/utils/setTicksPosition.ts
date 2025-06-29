export const setTicksPosition = (
  value: number,
  interval: string,
  path: "coins" | "convertor",
  smallScreen?: boolean,
) => {
  if (path === "coins") {
    if (!smallScreen) {
      if (interval === "1D") return value - 10;
      else if (interval === "1M") return value - 30;
      else return value - 35;
    }
    if (interval === "1D") return value - 15;
    else if (interval === "1M") return value - 30;
    else return value - 20;
  }
  if (!smallScreen) {
    if (interval === "1D") return value - 25;
    else if (interval === "7D") return value - 60;
    else if (interval === "14D") return value - 10;
    else return value - 60;
  }
  if (interval === "1D") return value - 10;
  else return value;
};
