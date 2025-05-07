import { fetchData } from "@/utils/fetchData";
import { parseIndividualCoin } from "@/utils/parseIndividualCoin";
import { IndividualCoinDataResponse } from "@/utils/types/IndividualCoinData";

export const getIndividualCoinData = async (coin: string) => {
  const response: IndividualCoinDataResponse = await fetchData(
    `coins/${coin}?&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    { noStore: true },
  );
  return parseIndividualCoin(response, "individual");
};
