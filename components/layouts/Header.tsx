import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { toggleTheme } from "store/actions/theme";

import { useTheme, styled, alpha } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import IconButton from "@mui/material/IconButton";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  "position": "relative",
  "borderRadius": theme.shape.borderRadius,
  "backgroundColor": alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "marginLeft": 0,
  "width": "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "color": "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "width": "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const dispatch = useAppDispatch();
  const onToggleTheme = useCallback(() => {
    return dispatch(toggleTheme());
  }, [dispatch]);

  const { palette } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={onToggleTheme}>
          {palette.mode === "dark" ? <ModeNightIcon /> : <WbSunnyIcon />}
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          PortFolio
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="검색"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
