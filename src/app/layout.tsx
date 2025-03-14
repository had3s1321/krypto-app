import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Krypto Land",
    template: "%s | Krypto Land",
  },
  description:
    "A modern crypto platform for tracking, comparing, and managing digital assets.",
  // TODO: add openGraph and twitter entries, when the app will be deployed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
