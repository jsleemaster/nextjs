import { style, globalStyle, createContainer } from "@vanilla-extract/css";
import { primary, white } from "styles/color.css";
import * as flex from "styles/flex.css";
import { fontSizeSm } from "styles/font.css";
import { responsiveStyle } from "styles/responsive.css";

globalStyle("body", {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const dateContainer = createContainer();

export const main = style({
  display: "flex",
  flexDirection: "column",
  containerName: dateContainer,
  width: "100%",
  "@container": {
    [`${dateContainer} (min-width: 768px)`]: {
      padding: 10,
    },
  },
});

export const sectionTitle = style([
  fontSizeSm,
  {
    alignItems: "center",
    marginBottom: 140,
  },
]);

export const header = style([
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  {
    alignItems: "center",
    backgroundColor: primary,
    color: white,
    fontSize: 20,
    padding: "0.3rem",
  },
]);

export const section = style([
  responsiveStyle({
    tablet: { display: flex.center },
    desktop: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
  }),
  {
    flex: 1,
  },
]);
export const article = style([]);
export const span = style([fontSizeSm]);
export const nextDateSpan = style([fontSizeSm]);
