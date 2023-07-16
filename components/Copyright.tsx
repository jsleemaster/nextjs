import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

export const CopyRight = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="/">
        Jsleemaster
      </MuiLink>{" "}
      {dayjs().year()}.
    </Typography>
  );
};
