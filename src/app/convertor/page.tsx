import CoinsConvertor from "@/components/convertorPage/CoinsConvertor";
import ConvertorChart from "@/components/convertorPage/ConvertorChart";
import ConvertorTitle from "@/components/convertorPage/ConvertorTitle";
import IntervalTabs from "@/components/ui/IntervalTabs";
import PageTabs from "@/components/ui/PageTabs";
import { ConvertorProvider } from "@/contexts/convertorProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krypto Land | Crypto Converter",
  description:
    "Easily convert between different cryptocurrencies and track real-time prices with our crypto converter tool.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default function Convertor() {
  return (
    <main className="mx-auto w-full max-w-[1296]">
      <PageTabs route="Convertor" />
      <ConvertorTitle />
      <ConvertorProvider>
        <CoinsConvertor />
        <ConvertorChart />
        <IntervalTabs />
      </ConvertorProvider>
    </main>
  );
}
