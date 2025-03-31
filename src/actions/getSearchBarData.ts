"use server";

import { fetchData } from "@/utils/fetchData";
import { SearchBarData } from "@/utils/types/SearchBarData";

export const getSearchBarData = async (query: string) => {
  const response: SearchBarData = await fetchData(`search?query=${query}`);
  return response;
};
