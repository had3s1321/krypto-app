import { Metadata } from "next";
import PageTabs from "@/components/ui/PageTabs";
import DataTable from "@/components/coinsPage/CoinTable";
import CoinSlider from "@/components/coinsPage/CoinSlider";
import ComparisonCharts from "@/components/coinsPage/ComparisonCharts";

export const metadata: Metadata = {
  title: "Krypto Land | Live Crypto Prices, Charts & Compare",
  description:
    "Track real-time prices of top cryptocurrencies, compare coins with interactive charts, and stay up-to-date with the latest crypto market trends.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1296] text-black">
      <PageTabs route="Coins" />
      <CoinSlider />
      <ComparisonCharts />
      <DataTable />
    </main>
  );
}
