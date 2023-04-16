import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightCustom = createTheme({
  palette: {
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
    },
  },
  status: {
    danger: red[700],
  },
});

lightCustom = responsiveFontSizes(lightCustom);

let darkCustom = createTheme({
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
});

darkCustom = responsiveFontSizes(darkCustom);

export const lightTheme = lightCustom;

export const darkTheme = darkCustom;