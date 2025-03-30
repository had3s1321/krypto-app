export interface ChartData {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

export type ParsedChartData = {
  [key: string]: string | number | undefined;
}[];
