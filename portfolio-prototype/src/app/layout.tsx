import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import Footer from "../../components/footer";
import ScrollHint from "../../components/scroll-hint";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo | Portfolio",
  description: "Gustavo's Portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} text-white bg-zinc-950`}>
        {children}
        {/* <Toaster position="top" /> */}
        <ScrollHint />
        <Footer />
      </body>
    </html>
  );
}
