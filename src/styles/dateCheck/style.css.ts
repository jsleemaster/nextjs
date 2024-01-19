import { style, globalStyle, createContainer } from "@vanilla-extract/css";
import { flexColumnCenter } from "styles/flex.css";
import { fontSizeSm } from "styles/font.css";
import { responsiveStyle } from "styles/responsive.css";

globalStyle("body", {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 10,
});

const dateContainer = createContainer();

export const main = style({
  display: "flex",
  containerName: dateContainer,
  "@container": {
    [`${dateContainer} (min-width: 768px)`]: {
      padding: 10,
    },
  },
});

export const sectionTitle = style([
  fontSizeSm,
  responsiveStyle({ tablet: flexColumnCenter, desktop: flexColumnCenter }),
  {
    alignItems: "center",
    marginBottom: 140,
  },
]);

export const section = style([
  flexColumnCenter,
  {
    alignItems: "center",
    marginBottom: 140,
  },
]);
export const span = style([fontSizeSm]);
export const nextDateSpan = style({
  padding: "0.3rem",
  borderRadius: 5,
});
