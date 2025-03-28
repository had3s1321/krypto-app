export interface ChartData {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

export type ParsedChartData = {
  time: string;
  coin1: number;
  coin2?: number;
}[];
