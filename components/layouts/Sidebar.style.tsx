import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SideUl = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 10,
}));

export const Sideli = styled(Paper)(({ theme }) => ({
  fontSize: 18,
  padding: 5,
  margin: 10,
  width: "100%",
  height: "100%",
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textAlign: "center",
}));
