import { red, blue } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const globalCss = `
  body {
    height: 100vh;
  }
  main {
    height: 100%;
  }
`;
import { h3, h6, subtitle2 } from "./font";

const typography = {
  h3: { ...h3 },
  h6: { ...h6 },
  subtitle2: { ...subtitle2 },
};

const lightCustom = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: globalCss,
      },
    },
    typography,
    palette: {
      background: {
        paper: "#fff",
      },
      custom: {
        light: blue[50],
        main: "#f57c00",
        dark: "#ef6c00",
      },
      text: {
        primary: "#000",
      },
    },
    status: {
      danger: blue[700],
    },
  })
);

const darkCustom = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: globalCss,
      },
    },
    typography,
    palette: {
      mode: "dark",
      background: {
        paper: "#222",
      },
      text: {
        primary: "#fff",
      },
      custom: {
        light: "#ffa726",
        main: "#f57c00",
        dark: "#ef6c00",
      },
    },
    status: {
      danger: red[700],
    },
  })
);

export const lightTheme = lightCustom;

export const darkTheme = darkCustom;
