"use server";

export const fetchData = async <T>(
  url: string,
  {
    localData,
    cache = "force-cache",
  }: {
    localData?: T;
    cache?: RequestCache;
  } = {},
): Promise<T> => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_KEY,
    } as HeadersInit,
    cache,
  };
  if (localData && process.env.NODE_ENV === "development") return localData;

  const fetchURL = process.env.NEXT_PUBLIC_COINGECKO_BASE_URL + url;
  const response = await fetch(fetchURL, options);
  if (!response.ok) throw new Error("Failed to connect to CoinGecko API");
  const body: T = await response.json();

  return body;
};
