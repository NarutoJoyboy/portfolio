import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import AmbientDust from "./components/AmbientDust";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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
  description: "UI design, UI development, backend development, and project management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spaceMono.variable} ${playfair.variable} antialiased`}
      >
        <AmbientDust />
        {children}
      </body>
    </html>
  );
}
