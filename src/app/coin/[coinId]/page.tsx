// TODO: here we need dynamic generated metadata,
// to be implemented once I've set up the action that will fetch the API data

import { getIndividualCoinData } from "@/actions/getIndividualCoinData";

import CoinValueCard from "@/components/individualCoinPage/CoinValueCard";
import { IndividualCoinStructuredData } from "@/utils/types/IndividualCoinData";

export default async function TaskDetail({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;
  const {
    valueCardData,
    descriptionCardData, //eslint-disable-line
    volumeCardData, //eslint-disable-line
    supplyCardData, //eslint-disable-line
    marketCardData, //eslint-disable-line
  } = (await getIndividualCoinData(coinId)) as IndividualCoinStructuredData;

  return (
    <main className="mx-auto w-full max-w-[1296] font-grotesk">
      <div className="flex w-full gap-8">
        <CoinValueCard data={valueCardData} />
      </div>
    </main>
  );
}
