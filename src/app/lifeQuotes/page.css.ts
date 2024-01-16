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
export const sectionTitle = style({
  fontSize: 22,
  marginBottom: 20,
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
  margin: "2rem",
});
