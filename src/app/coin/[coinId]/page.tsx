// TODO: here we need dynamic generated metadata,
// to be implemented once I've set up the action that will fetch the API data

import { getIndividualCoinData } from "@/actions/getIndividualCoinData";
import CoinDescriptionCard from "@/components/individualCoinPage/CoinDescriptionCard";
import CoinGenericDataCard from "@/components/individualCoinPage/CoinGenericDataCard";
import CoinValueCard from "@/components/individualCoinPage/CoinValueCard";
import Separator from "@/components/ui/Separator";
import { IndividualCoinStructuredData } from "@/utils/types/IndividualCoinData";

export default async function TaskDetail({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;
  const {
    valueCardData,
    descriptionCardData,
    volumeCardData,
    supplyCardData,
    marketCardData,
  } = (await getIndividualCoinData(coinId)) as IndividualCoinStructuredData;

  return (
    <main className="mx-auto flex w-full max-w-[1296] flex-col gap-8 font-grotesk">
      <div className="flex h-[352px] w-full gap-8">
        <CoinValueCard data={valueCardData} />
        <CoinDescriptionCard data={descriptionCardData} />
      </div>
      <Separator />
      <div className="flex w-full flex-wrap gap-4">
        <CoinGenericDataCard data={volumeCardData} />
        <CoinGenericDataCard data={supplyCardData} hasProgressBar />
        <CoinGenericDataCard data={marketCardData} />
      </div>
    </main>
  );
}
