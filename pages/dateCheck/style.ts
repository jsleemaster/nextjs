import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  padding: "0 2rem",
}));

export const Main = styled("main")(({ theme }) => ({
  minHeight: "100vh",
  padding: "4rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const DateSpan = styled("span")(({ theme }) => ({
  fontSize: "2rem",
}));

export const NextDateSpan = styled("span")(({ theme }) => ({
  fontSize: "3rem",
  color: "brown",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
}));
