import {Inter} from "next/font/google";
import {cn} from "@/utils";
import AppHeader from "@/blocks/app-header";

import "./globals.css";
import {Metadata} from "next";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    default: "Abi",
    template: "%s - Abi",
  },
  keywords: [
    "Portfolio",
    "Abinayan Sureskumar",
    "Abi",
    "Software Developer",
    "Github",
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn("bg-[#010101]", inter.className)}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
