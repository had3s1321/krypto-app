import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krypto Land | Crypto Converter",
  description:
    "Easily convert between different cryptocurrencies and track real-time prices with our crypto converter tool.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default function Convertor() {
  return <div className="text-black">Convertor page</div>;
}
