import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import Providers from "store/provider";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "JsleeMaster",
  description: "Jsleemaster App",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko" className={roboto.className}>
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
