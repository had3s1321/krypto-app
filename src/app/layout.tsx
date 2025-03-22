import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import PageHeader from "@/components/PageHeader";
import "./globals.css";
import { ThemeProvider } from "@/contexts/themeProvider";
import StoreProvider from "./StoreProvider";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${space_grotesk.variable}`}
    >
      <body className={`antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageHeader />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
