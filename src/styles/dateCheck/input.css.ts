import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "styles/responsive.css";
export const dateInputContainer = style({
  display: "flex",
});
export const dateInputBox = style([
  {
    display: "flex",
    flexDirection: "column",
    margin: "0.2rem",
  },
  responsiveStyle({
    tablet: {
      width: 80,
    },
    desktop: { width: 110 },
  }),
]);

export const dateInputButton = style({
  width: "3rem",
  height: "2rem",
  fontSize: 16,
  marginTop: "1rem",
  marginLeft: "auto",
});
export const dateLabel = style({
  fontSize: 13,
});
