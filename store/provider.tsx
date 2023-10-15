"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { useAppSelector } from "app/hooks/reduxHooks";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
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
      <body>
        <Provider store={store}>
          <AppContainer>{children}</AppContainer>
        </Provider>
      </body>
    </html>
  );
}
