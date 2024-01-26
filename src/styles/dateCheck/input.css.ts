import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "styles/responsive.css";
export const dateInputContainer = style({
  display: "flex",
  alignItems: "center",
});
export const dateButtonContainer = style({
  display: "flex",
  marginLeft: "auto",
  gap: "10px",
});
export const dateInputTitle = style({
  fontSize: 16,
  marginRight: 10,
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
  width: "4rem",
  height: "2rem",
  fontSize: 16,
  marginTop: "1rem",
  marginLeft: "auto",
});
export const dateLabel = style({
  fontSize: 13,
});
