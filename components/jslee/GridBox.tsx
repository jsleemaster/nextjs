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
        display: "flex",
        flexDirection: "column",
        overflow: "scroll",
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
      <Grid sx={{ maxHeight: "100%", overflowY: "auto" }}>{children}</Grid>
    </Grid>
  );
};
export default GridBox;
