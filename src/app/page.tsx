import { Metadata } from "next";
import PageTabs from "@/components/ui/PageTabs";
import DataTable from "@/components/coinsPage/CoinTable";
import CoinSlider from "@/components/coinsPage/CoinSlider";
import ComparisonCharts from "@/components/coinsPage/ComparisonCharts";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: "Krypto Land | Live Crypto Prices, Charts & Compare",
  description:
    "Track real-time prices of top cryptocurrencies, compare coins with interactive charts, and stay up-to-date with the latest crypto market trends.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.currency;

  return (
    <main className="mx-auto w-full max-w-[calc(100%-16px)] text-black md:max-w-[calc(100%-32px)] lg:max-w-[1296px]">
      <PageTabs route="Coins" />
      <CoinSlider query={query} />
      <ComparisonCharts />
      <DataTable />
    </main>
  );
}
