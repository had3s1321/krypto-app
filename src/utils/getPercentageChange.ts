export const getPercentageChange = (
  equity: number,
  amount: number,
  currentPrice: number,
) => {
  const currentValue = amount * currentPrice;
  const difference = currentValue - equity;
  return (difference / equity) * 100;
};
