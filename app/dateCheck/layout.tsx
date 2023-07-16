import Providers from "@/store/provider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "날짜 계산앱",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
