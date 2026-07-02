import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffee House | Every Cup Crafted to Perfection",
  description:
    "Experience premium handcrafted coffee and artisan pastries at Coffee House. Sourced from the finest beans, roasted with passion.",
  keywords: [
    "coffee",
    "café",
    "luxury coffee",
    "artisan pastries",
    "latte art",
    "premium café",
  ],
  openGraph: {
    title: "Coffee House | Every Cup Crafted to Perfection",
    description:
      "Experience premium handcrafted coffee and artisan pastries at Coffee House.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
