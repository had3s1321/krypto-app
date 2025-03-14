import Link from "next/link";
import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Krypto Land",
    template: "%s | Krypto Land",
  },
  description:
    "A modern crypto platform for tracking, comparing, and managing digital assets.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
  // TODO: add a sitemap when the app will be deployed
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space_grotesk.variable}`}>
      <body className={`antialiased`}>
        <nav className="flex w-full gap-6 bg-green-700">
          <Link href="/">Home</Link>
          <Link href="/coin/bitcoin">Bitcoin</Link>
          <Link href="/coin/ethereum">Ethereum</Link>
          <Link href="/portfolio">Portfolio</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
