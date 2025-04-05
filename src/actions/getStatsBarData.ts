"use server";

import { fetchData } from "@/utils/fetchData";
import { StatsBarData } from "@/utils/types/StatsBarData";
import { parseStatsBarData } from "@/utils/parseStatsBarData";
import { stats_bar } from "@/utils/mockData/status_bar";

export const getStatsBarData = async () => {
  const response: StatsBarData = await fetchData("global", {
    localData: stats_bar,
  });
  return parseStatsBarData(response);
};
