import { useCallback } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import { toggleTheme } from "store/actions/theme";

/* mui */
import { useTheme } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

/* style */
import { Search, StyledInputBase, SearchIconWrapper } from "./Header.style";

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