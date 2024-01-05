import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

const GridBox = ({
  children,
  title,
  sx,
}: {
  children: ReactNode;
  title: string;
  sx?: object;
}) => {
  return (
    <Grid
      sx={{
        ...sx,
        "display": "flex",
        "flexDirection": "column",
        "overflow": "scroll",
        "&::-webkit-scrollbar": { display: "none" },
        "&::-webkit-scrollbar-thumb": { display: "none" },
        "scrollbar-width": "none",
      }}
      component={"article"}
    >
      <Typography
        variant="h5"
        color="initial"
        sx={{
          textDecoration: "underline",
          textUnderlineOffset: 5,
          textUnderlinePosition: "under",
          textDecorationColor: "#eaeaea",
          padding: 0.5,
        }}
      >
        {title}
      </Typography>
      <Grid
        sx={{
          "maxHeight": "100%",
          "overflowY": "overlay",
          "&::-webkit-scrollbar": {
            background: "transparent",
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            background: "rgba(0,0,0,0.1)",
          },
          "&::-webkit-scrollbar-track": {
            background: "none",
          },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
export default GridBox;
