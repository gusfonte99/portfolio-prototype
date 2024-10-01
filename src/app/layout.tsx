import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

import Footer from "../../components/footer";

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Gustavo | Portfolio",
  description: "Gustavo's Portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${chakra.className} text-white bg-zinc-950`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
