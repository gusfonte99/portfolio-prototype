import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo | Portfolio",
  description: "Gustavo's Portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} text-white bg-zinc-950`}>
        <Navbar />
        {children}
        {/* <Toaster position="top-right" /> */}
        <Footer />
      </body>
    </html>
  );
}
