import CoinsConvertor from "@/components/convertorPage/CoinsConvertor";
import ConvertorChart from "@/components/convertorPage/ConvertorChart";
import ConvertorHeader from "@/components/convertorPage/ConvertorHeader";
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
    <main className="mx-auto w-full max-w-[calc(100%-16px)] md:max-w-[calc(100%-32px)] lg:max-w-[1296px]">
      <PageTabs route="Convertor" />
      <ConvertorHeader />
      <ConvertorProvider>
        <CoinsConvertor />
        <ConvertorChart />
      </ConvertorProvider>
    </main>
  );
}
