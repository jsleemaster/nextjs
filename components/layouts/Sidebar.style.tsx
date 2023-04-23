import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SideUl = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: 10,
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

  ":hover": {
    transition: "all 0.2s ease-in-out",
    backgroundColor: theme.palette.custom.light,
    color: theme.palette.text.primary,
  },
}));
