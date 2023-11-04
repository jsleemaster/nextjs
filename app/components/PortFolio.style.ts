import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const PortFolioBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
}));

export const PortFolioContent = styled(Paper)(({ theme }) => ({
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "fontSize": 18,
  "padding": 5,
  "margin": 10,
  "width": 200,
  "height": 100,
  "cursor": "pointer",
  "whiteSpace": "nowrap",
  "overflow": "hidden",
  "p": {
    textOverflow: "ellipsis",
  },
  ":hover": {
    transition: "all 0.2s ease-in-out",
    backgroundColor: theme.palette.custom.light,
    color: theme.palette.text.primary,
  },
}));
