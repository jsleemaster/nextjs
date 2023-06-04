"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "hooks/reduxHooks";
import { ReactNode } from "react";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <AppContainer>{children}</AppContainer>
    </Provider>
  );
}
