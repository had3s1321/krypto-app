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
  return <div className="text-black">Portfolio page</div>;
}
