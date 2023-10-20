import {Inter} from "next/font/google";
import {cn} from "@/utils";
import AppHeader from "@/blocks/app-header";

import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn("bg-black", inter.className)}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
