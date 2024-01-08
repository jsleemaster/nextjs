import { styled } from "@mui/material/styles";

export const Container = styled("div")(() => ({
  padding: "0 2rem",
}));

export const Main = styled("main")(() => ({
  minHeight: "100vh",
  padding: "4rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const DateSpan = styled("span")(() => ({
  fontSize: "2rem",
}));

export const NextDateSpan = styled("span")(() => ({
  color: "brown",
}));
