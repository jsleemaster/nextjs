import { style } from "@vanilla-extract/css";
export const scrollActive = style({
  opacity: "0",
  transform: "translateY(100%)",
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
});
export const quotesTitle = style({
  fontSize: 16,
  fontWeight: "bold",
});
export const quotesAuthor = style({
  fontSize: 14,
});
