"use client";

import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { parseChartData } from "@/utils/parseChartData";
import { CarouselItemInterface } from "@/components/coinsPage/CoinSlider/CoinsCarousel";
import { ChartData } from "@/utils/types/ChartData";

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
    getChartDataByCoin: build.query({
      queryFn: async (
        coins: CarouselItemInterface[],
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) => {
        try {
          const responses = await Promise.all(
            coins.map(async (coin) =>
              fetchWithBQ(
                `coins/${coin.id}/market_chart?vs_currency=usd&days=1`,
              ),
            ),
          );
          const data = responses.map((res) => {
            if (res.error) throw res.error;
            return res.data as ChartData;
          });

          return {
            data: {
              prices: parseChartData(data, "prices"),
              volumes: parseChartData(data, "total_volumes"),
            },
          };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const { useGetChartDataByCoinQuery } = coingeckoApi;
