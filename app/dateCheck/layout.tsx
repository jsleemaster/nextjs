import Providers from "@/store/provider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "날짜 계산앱",
  description: "날짜 계산, 내년까지 얼마나 남았을까?",
  keywords: "dateCacalutor, 날짜계산, 내년, 날짜, 날짜에 일더하기",
  authors: { url: "", name: "jsleemaster" },
  openGraph: {
    siteName: "jsleemaster",
    title: "날짜 계산앱",
    description: "날짜 계산, 내년까지 얼마나 남았을까?",
    type: "website",
    url: "",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
