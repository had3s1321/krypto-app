export const parsePercentageValue = (arg: string | number) => {
  if (typeof arg === "number") return arg;
  if (isNaN(+arg[0])) return parseFloat(arg.substring(1));
  return parseFloat(arg);
};

export const roundNumber = (num: number, decimals: number) => {
  if (num > 9999999999 && num < 999999999999)
    return (num / 1000000000).toFixed(decimals);
  if (num > 999999999999) return (num / 1000000000000).toFixed(decimals);
  return num.toFixed(decimals);
};
