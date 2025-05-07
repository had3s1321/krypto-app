import { Currencies } from "@/lib/features/user/userSlice";
import { ParsedChartData } from "@/utils/types/ChartData";
import { HistoricalCoinPrice } from "@/utils/types/HistoricalCoinData";
import {
  ConversionCoinData,
  IndividualCoinStructuredData,
  PortfolioCoinData,
} from "@/utils/types/IndividualCoinData";

export interface ChartDataByCoin {
  prices: ParsedChartData;
  volumes?: ParsedChartData;
}

export interface ChartDataByCoinArg {
  coins: string[];
  currency: Currencies;
  path: "home" | "convertor";
  range: string;
}

export interface GetCoinTableArg {
  currency: Currencies;
}

export type IndividualCoinData =
  | ConversionCoinData
  | PortfolioCoinData
  | IndividualCoinStructuredData;

export interface IndividualCoinDataArg {
  coin: string;
  path: "convertor" | "portfolio" | "individual";
}

export type HistoricalCoinData = HistoricalCoinPrice;

export interface HistoricalCoinDataArg {
  coin: string;
  date: string;
}
