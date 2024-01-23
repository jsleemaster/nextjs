import { style, globalStyle, createContainer } from "@vanilla-extract/css";
import { primary, seconds, white } from "styles/color.css";
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

globalStyle("input", {
  padding: 2,
  fontSize: 15,
});
globalStyle("button", {
  backgroundColor: primary,
  border: "none",
  borderRadius: 5,
  padding: "0.3rem",
  color: white,
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.1s ease-in",
});
globalStyle("button:hover", {
  backgroundColor: seconds,
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
    tablet: { ...flex.ColumnCenter },
    desktop: {
      ...flex.center,
    },
  }),
  {
    flex: 1,
  },
]);
export const article = style({
  boxShadow: "1px 1px 3px 0 rgba(0,0,0,0.6)",
  margin: "0.8rem",
  padding: "0.8rem",
  flex: 1,
  display: "flex",
  flexDirection: "column",
});
export const span = style([fontSizeSm]);
export const footer = style([fontSizeSm, { textAlign: "center" }]);
export const nextDateSpan = style([fontSizeSm]);
