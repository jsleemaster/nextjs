import { Metadata } from "next";
import { ReactNode } from "react";

import Providers from "store/provider";

export const metadata: Metadata = {
  title: "명언",
  description: "Jsleemaster App",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
