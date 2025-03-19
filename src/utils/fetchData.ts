"use server";

type FetchOptions = {
  cache?: RequestCache;
  headers?: HeadersInit;
};

export const fetchData = async <T>(
  url: string,
  localData: T | undefined,
  { cache = "force-cache", headers }: FetchOptions,
): Promise<T> => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
      ...headers,
    } as HeadersInit,
    cache,
  };
  if (process.env.NODE_ENV === "development" && localData) return localData;

  const fetchURL = process.env.COINGECKO_BASE_URL + url;
  const response = await fetch(fetchURL, options);
  if (!response.ok) throw new Error("Failed to connect to CoinGecko API");
  const body: T = await response.json();

  return body;
};
