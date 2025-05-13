import PortfolioCoinList from "@/components/portfolioPage/PortfolioCoinList";
import PortfolioHeader from "@/components/portfolioPage/PortfolioHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Portfolio Dashboard | Krypto Land",
  description:
    "Build and manage your personal cryptocurrency portfolio. Track performance, value changes, and asset distribution over time.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
  robots: {
    index: false,
    follow: false,
  },
};

export default function Portfolio() {
  return (
    <main className="mx-auto w-full max-w-[calc(100%-16px)] md:max-w-[calc(100%-32px)] lg:max-w-[1296px]">
      <PortfolioHeader />
      <PortfolioCoinList />
    </main>
  );
}
