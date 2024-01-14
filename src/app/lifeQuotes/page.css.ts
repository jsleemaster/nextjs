import { style, createTheme, globalStyle } from "@vanilla-extract/css";
globalStyle("body", {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 10,
});
export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

export const section = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const label = style({
  fontSize: 14,
});
export const select = style({
  padding: "0.3rem",
  borderRadius: 5,
});
export const messageSection = style({
  overflow: "hidden",
  borderColor: "black",
  boxShadow: "0 0 2px 0.5px",
  borderRadius: "10px",
  marginTop: "2rem",
});
