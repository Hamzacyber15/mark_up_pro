import type { Metadata } from "next";
import { Outfit, Orbitron } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});


export const metadata: Metadata = {
  title: "MarkupPro | Your Chart Markup Platform",
  description: "Analyze, share and collaborate on your analysis like never before with MarkupPro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${orbitron.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-white">{children}</body>
    </html>
  );
}


