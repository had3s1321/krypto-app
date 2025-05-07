"use server";

import { fetchData } from "@/utils/fetchData";
import { StatsBarData } from "@/utils/types/StatsBarData";
import { parseStatsBarData } from "@/utils/parseStatsBarData";

export const getStatsBarData = async () => {
  const response: StatsBarData = await fetchData("global", {});
  return parseStatsBarData(response);
};
