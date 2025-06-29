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
    <main className="mx-auto flex w-full max-w-[calc(100%-16px)] flex-col gap-8 font-grotesk md:max-w-[calc(100%-32px)] lg:max-w-[1296px]">
      <div className="flex h-full w-full flex-col gap-8 md:h-[352px] md:flex-row">
        <CoinValueCard data={valueCardData} />
        <CoinDescriptionCard data={descriptionCardData} />
      </div>
      <Separator />
      <div className="mb-28 flex w-full flex-col flex-wrap gap-4 md:mb-0 md:flex-row">
        <CoinGenericDataCard data={volumeCardData} />
        <CoinGenericDataCard data={supplyCardData} hasProgressBar />
        <CoinGenericDataCard data={marketCardData} />
      </div>
    </main>
  );
}
