import { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeProvider";
import StoreProvider from "./StoreProvider";
import PageHeader from "@/components/PageHeader";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("accept-language")?.split(",")[0] || "en-US";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${space_grotesk.variable}`}
    >
      <body className={`antialiased`}>
        <StoreProvider locale={locale}>
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
