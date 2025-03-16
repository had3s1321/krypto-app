import { Metadata } from "next";
import PageTabs from "@/components/ui/PageTabs";

export const metadata: Metadata = {
  title: "Krypto Land | Live Crypto Prices, Charts & Converter",
  description:
    "Track real-time prices of top cryptocurrencies, compare coins with interactive charts, and convert between crypto assets easily.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1296] text-black">
      <PageTabs route="Coins" />
    </div>
  );
}
