import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mazi's Token Hub",
  description:
    "Experience the next generation of decentralized token trading. Fast, secure, and powerful tools for the modern crypto trader.",
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
