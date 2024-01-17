import { style } from "@vanilla-extract/css";
export const scrollActive = style({
  opacity: "0",
});
export const quotoesBox = style({
  color: "black",
  padding: 10,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  transition: "opacity 1s ease-out, transform 1s ease-in",
  overflow: "hidden",
  gap: 10,
});
export const quotesTitle = style({
  fontSize: 20,
  fontWeight: "bold",
});
export const quotesAuthor = style({
  fontSize: 14,
});
