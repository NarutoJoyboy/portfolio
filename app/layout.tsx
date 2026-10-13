import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Karrik — Jean-Baptiste Morizot & Lucas Le Bihan / Phantom Foundry, OFL.
// Vernacular sans with deliberately uneven widths; built to hold up at both
// display and body sizes, unlike Basteleur which only worked as a display face.
const karrik = localFont({
  src: [
    { path: "./fonts/Karrik-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Karrik-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-karrik",
  display: "swap",
});

// Sligoil — Ariel Martín Pérez / Velvetyne, OFL. Monospace with large
// inktraps, trial replacement for Space Mono on section labels.
const sligoil = localFont({
  src: [
    { path: "./fonts/Sligoil-Micro.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Sligoil-MicroBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sligoil",
  display: "swap",
});

const basteleur = localFont({
  src: "./fonts/Basteleur-Bold.woff2",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Prem Prajapat",
  description: "Prem Prajapat designs and engineers web and mobile products from first flow to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karrik.variable} ${sligoil.variable} ${basteleur.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
