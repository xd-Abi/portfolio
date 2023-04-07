import React from "react";
import { Roboto } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "700"] });

export default function Container({ children }: Props) {
  return <main className={`px-14 ${roboto.className}`}>{children}</main>;
}
