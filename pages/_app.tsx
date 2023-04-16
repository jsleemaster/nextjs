import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme";
import Head from "next/head.js";
import { wrapper } from "store/configStore";
import { Provider } from "react-redux";
import { useAppSelector } from "hooks/reduxHooks";
export interface MyAppProps extends AppProps {
  // emotionCache?: EmotionCache;
}
const AppContainer = ({ children }) => {
  const themeType = useAppSelector((state) => state.theme.darkTheme);
  const [themeStatus, setThemeStatus] = useState(themeType);
  useEffect(() => {
    setThemeStatus(!themeStatus);
  }, [themeType]);

  return (
    <ThemeProvider theme={themeStatus ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default function App({ Component, ...rest }: MyAppProps) {
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
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </Provider>
  );
}
