import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Atlas Intelligence - The Intelligence Layer For The AI Economy",
  description: "Track every AI company, founder, investor, funding round, product launch and market movement. Replicating Crunchbase and Product Hunt focused entirely on AI.",
  keywords: ["AI startups", "AI founders", "AI investors", "AI funding", "AI products", "AI jobs", "AI research"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
