import type { Metadata } from "next";
import { Space_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AmbientDust from "./components/AmbientDust";

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

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  style: ["italic"],
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Prem Prajapat",
  description: "Product design, web and mobile app development, backend engineering, and delivery — one person, end to end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fontshare (ITF) — retail faces released free for commercial use.
            Not on Google Fonts, so they load by CDN rather than next/font. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* One link per family: Fontshare's multi-family f[] request silently
            drops all but the first, and CSS weight values in @ return the
            wrong typeface entirely. */}
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=switzer&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceMono.variable} ${playfair.variable} ${karrik.variable} ${sligoil.variable} antialiased`}>
        <AmbientDust />
        {children}
      </body>
    </html>
  );
}
