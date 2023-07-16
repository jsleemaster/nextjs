import { Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("main")(() => ({
  display: "flex",
  height: "100%",
  padding: 10,
}));

const LeftText = styled("h6")(({ theme }) => ({
  width: "10rem",
  [theme.breakpoints.down("md")]: {
    width: "2rem",
  },
  color: "rgba(120, 119, 116, 1)",
}));

export const ProfileBox = ({ profile }) => {
  return (
    <Grid item display="flex">
      <Typography component={LeftText}>{profile.subtitle}</Typography>
      {profile?.type === "email" && (
        <Link variant="h6" href="https://velog.io/@jsleemaster" target="_blank">
          {profile.name}
        </Link>
      )}
      {!profile?.type && (
        <Typography variant="h6" sx={{ flex: 1 }}>
          {profile.name}
        </Typography>
      )}
    </Grid>
  );
};
