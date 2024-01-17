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

export const sectionBottom = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 140,
});
export const sectionTitle = style({
  fontSize: 22,
  marginTop: 100,
  fontWeight: "bold",
  color: "#ff8870",
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
  borderRadius: "10px",
  flex: 1,
  display: "flex",
  justifyContent: "center",
});
