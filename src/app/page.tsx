import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krypto Land | Live Crypto Prices, Charts & Converter",
  description:
    "Track real-time prices of top cryptocurrencies, compare coins with interactive charts, and convert between crypto assets easily.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default function Home() {
  return <div className="text-black">Home page</div>;
}
