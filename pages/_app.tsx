import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
export interface MyAppProps extends AppProps {
  // emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { Component, pageProps } = props;
  return (
    <>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
