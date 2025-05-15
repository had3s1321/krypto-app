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
import { parseHistoricalCoinData } from "@/utils/parseHistoricalCoinData";
import { parseIndividualCoin } from "@/utils/parseIndividualCoin";
import { parseTableData } from "@/utils/parseTableData";
import { ChartData } from "@/utils/types/ChartData";
import {
  CoinsListMarketData,
  ParsedTableData,
} from "@/utils/types/CoinsListMarketData";
import { IndividualCoinDataResponse } from "@/utils/types/IndividualCoinData";
import { HistoricalCoinResponse } from "@/utils/types/HistoricalCoinData";
import {
  ChartDataByCoin,
  ChartDataByCoinArg,
  GetCoinTableArg,
  HistoricalCoinData,
  HistoricalCoinDataArg,
  IndividualCoinData,
  IndividualCoinDataArg,
} from "./types";
import { getTimeRangeInUNIX } from "@/utils/formatUtils";

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
    mode: "cors",
  }),
  keepUnusedDataFor: 600,
  endpoints: (build) => ({
    getChartDataByCoin: build.query<ChartDataByCoin, ChartDataByCoinArg>({
      queryFn: async (
        { coins, currency, path, range },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        const { from, to } = getTimeRangeInUNIX(range);

        try {
          const responses = await Promise.all(
            coins.map(async (coin) =>
              fetchWithBQ(
                `coins/${coin}/market_chart/range?vs_currency=${currency}&from=${from}&to=${to}`,
              ),
            ),
          );
          const data = responses.map((res) => {
            if (res.error) throw res.error;
            return res.data as ChartData;
          });

          if (path === "convertor")
            return {
              data: { prices: parseConversionCoinsChartData(data, range) },
            };

          return {
            data: {
              prices: parseChartData(data, coins, "prices", range),
              volumes: parseChartData(data, coins, "total_volumes", range),
            },
          };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
    getCoinTableData: build.infiniteQuery<
      ParsedTableData[],
      GetCoinTableArg,
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      queryFn: async (
        { queryArg, pageParam },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        const { currency } = queryArg;

        try {
          const response = await fetchWithBQ(
            `coins/markets?vs_currency=${currency}&per_page=50&page=${pageParam}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
          );
          if (response.error) return { error: response.error };

          return { data: parseTableData(response.data as CoinsListMarketData) };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
    getIndividualCoinData: build.query<
      IndividualCoinData,
      IndividualCoinDataArg
    >({
      queryFn: async (
        { coin, path },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        try {
          const response = await fetchWithBQ(
            `coins/${coin}?&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
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
      HistoricalCoinData,
      HistoricalCoinDataArg
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
