import { Metadata } from "next";
import { ReactNode } from "react";

import Providers from "store/provider";

import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "JsleeMaster",
  description: "Jsleemaster App",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
