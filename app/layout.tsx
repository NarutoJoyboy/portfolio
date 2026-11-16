import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

// Inter Tight for everything, Instrument Serif italic for the rare emphasis,
// Geist Mono for small labels.
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Prem Prajapat — Product designer & full-stack engineer",
  description: "Prem Prajapat designs and engineers web and mobile products from first flow to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}>
        {/* Marks that JS is running, so scroll reveals only hide content when they can show it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
