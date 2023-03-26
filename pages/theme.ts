import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
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

theme = responsiveFontSizes(theme);
export default theme;
