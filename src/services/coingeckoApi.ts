"use client";

import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import {
  parseChartData,
  parseConversionCoinsChartData,
} from "@/utils/parseChartData";
import { parseIndividualCoin } from "@/utils/parseConversionCoin";
import { parseTableData } from "@/utils/parseTableData";
import { ChartData, ParsedChartData } from "@/utils/types/ChartData";
import {
  CoinsListMarketData,
  ParsedTableData,
} from "@/utils/types/CoinsListMarketData";
import {
  ConversionCoinData,
  IndividualCoinDataResponse,
} from "@/utils/types/IndividualCoinData";
import { parseHistoricalCoinData } from "@/utils/parseHistoricalCoinData";
import {
  HistoricalCoinPrice,
  HistoricalCoinResponse,
} from "@/utils/types/HistoricalCoinData";

export const coingeckoApi = createApi({
  reducerPath: "coingeckoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_COINGECKO_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      if (process.env.NEXT_PUBLIC_COINGECKO_API_KEY)
        headers.set(
          "x-cg-demo-api-key",
          process.env.NEXT_PUBLIC_COINGECKO_API_KEY,
        );
      return headers;
    },
    method: "GET",
  }),
  endpoints: (build) => ({
    getChartDataByCoin: build.query<
      { prices: ParsedChartData; volumes?: ParsedChartData },
      { coins: string[]; isConversion?: boolean }
    >({
      queryFn: async (
        { coins, isConversion },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        try {
          const responses = await Promise.all(
            coins.map(async (coin) =>
              fetchWithBQ(`coins/${coin}/market_chart?vs_currency=usd&days=1`),
            ),
          );
          const data = responses.map((res) => {
            if (res.error) throw res.error;
            return res.data as ChartData;
          });

          if (isConversion)
            return {
              data: { prices: parseConversionCoinsChartData(data) },
            };

          return {
            data: {
              prices: parseChartData(data, coins, "prices"),
              volumes: parseChartData(data, coins, "total_volumes"),
            },
          };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
    getCoinTableData: build.infiniteQuery<ParsedTableData[], string, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      queryFn: async ({ pageParam }, _queryApi, _extraOptions, fetchWithBQ) => {
        try {
          const response = await fetchWithBQ(
            `coins/markets?vs_currency=usd&per_page=50&page=${pageParam}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
          );
          if (response.error) return { error: response.error };

          return { data: parseTableData(response.data as CoinsListMarketData) };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
    getIndividualCoinData: build.query<
      ConversionCoinData,
      { coin: string; path: "convertor" | "portfolio" }
    >({
      queryFn: async (
        { coin, path },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        try {
          const response = await fetchWithBQ(
            `coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
          );
          if (response.error) return { error: response.error };

          return {
            data: parseIndividualCoin(
              response.data as IndividualCoinDataResponse,
              path,
            ),
          };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
    getHistoricalCoinData: build.query<
      HistoricalCoinPrice,
      { coin: string; date: string }
    >({
      queryFn: async (
        { coin, date },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        try {
          const response = await fetchWithBQ(
            `coins/${coin}/history?date=${date}`,
          );
          if (response.error) return { error: response.error };

          return {
            data: parseHistoricalCoinData(
              response.data as HistoricalCoinResponse,
            ),
          };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const {
  useGetChartDataByCoinQuery,
  useGetCoinTableDataInfiniteQuery,
  useLazyGetChartDataByCoinQuery,
  useLazyGetIndividualCoinDataQuery,
  useLazyGetHistoricalCoinDataQuery,
} = coingeckoApi;
