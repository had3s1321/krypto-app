export const trimDecimals = (value: number) => {
  if (value === 0) return "0";

  if (Math.abs(value) < 0.001) {
    return value.toFixed(7).replace(/\.?0+$/, "");
  }

  return value.toFixed(3).replace(/\.?0+$/, "");
};
