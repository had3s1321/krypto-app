"use server";

import { fetchData } from "@/utils/fetchData";
import { search_bar } from "@/utils/mockData/search_bar";
import { SearchBarData } from "@/utils/types/SearchBarData";

export const getSearchBarData = async (query: string) => {
  const response: SearchBarData = await fetchData(
    `search?query=${query}`,
    search_bar,
  );
  return response;
};
