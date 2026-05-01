import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ANTIC AGENCY | AI-Powered Digital Transformation for SMBs",
  description:
    "We build high-converting websites and AI automation systems for small businesses. More leads, more revenue, less work. Serving Bergen County, NJ and beyond.",
  keywords:
    "digital agency, web design, AI automation, SEO, Bergen County NJ, small business websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#080810] text-white antialiased">{children}</body>
    </html>
  );
}
