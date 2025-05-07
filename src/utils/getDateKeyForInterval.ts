export const getDateKeyForInterval = (
  timestamp: number,
  interval: string,
): string => {
  const date = new Date(timestamp);

  switch (interval) {
    case "1D":
      return `${date.getUTCHours()}:00`;
    case "7D":
    case "14D": {
      const hours = date.getUTCHours();
      const roundedHours =
        interval === "7D"
          ? Math.floor(hours / 4) * 4
          : Math.floor(hours / 8) * 8;
      return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${roundedHours}:00`;
    }
    case "1M":
    case "1Y":
      return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
    default:
      return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:00`;
  }
};
