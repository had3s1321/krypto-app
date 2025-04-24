import { fetchData } from "@/utils/fetchData";
import { btc_individual_coin_data } from "@/utils/mockData/btc_individual_coin_data";
import { parseIndividualCoin } from "@/utils/parseIndividualCoin";
import { IndividualCoinDataResponse } from "@/utils/types/IndividualCoinData";

export const getIndividualCoinData = async (coin: string) => {
  const response: IndividualCoinDataResponse = await fetchData(
    `coins/${coin}?&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    { localData: btc_individual_coin_data },
  );
  return parseIndividualCoin(response, "individual");
};
