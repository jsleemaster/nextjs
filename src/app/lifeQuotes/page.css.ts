import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

export const quotoesBox = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "black",
  padding: 10,
  display: "flex",
  height: "100%",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});
export const quotesTitle = style({
  fontSize: 16,
});
export const quotesAuthor = style({
  fontSize: 14,
});
