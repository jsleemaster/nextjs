"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { useAppSelector } from "hooks/reduxHooks";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// import { wrapper } from "store/configStore";
import { store } from "./configStore";
import { darkTheme, lightTheme } from "./theme";

const AppContainer = ({ children }: { children: ReactNode }) => {
  const darkStatus = useAppSelector((state) => state.theme.darkTheme);

  return (
    <ThemeProvider theme={darkStatus ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={roboto.className}>
      <link rel="icon" href="/favicon.ico" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3829903653557809"
        crossOrigin="anonymous"
      ></Script>
      <body>
        <Provider store={store}>
          <AppContainer>{children}</AppContainer>
        </Provider>
      </body>
    </html>
  );
}
