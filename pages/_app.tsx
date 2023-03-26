import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Head from "next/head.js";
import { wrapper } from "store/configStore";
import { Provider } from "react-redux";
export interface MyAppProps extends AppProps {
  // emotionCache?: EmotionCache;
}

function MyApp({ Component, ...rest }: MyAppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Head>
        <title>JsLeeMaster</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
