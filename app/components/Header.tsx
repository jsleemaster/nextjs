/* mui */
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Avatar, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "app/hooks/reduxHooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, ChangeEvent } from "react";
import { searchPortFolio } from "store/actions/portfoilo";
import { toggleTheme } from "store/actions/theme";

/* style */
import { Search, StyledInputBase, SearchIconWrapper } from "./HeaderStyle";

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onToggleTheme = useCallback(() => {
    return dispatch(toggleTheme());
  }, [dispatch]);
  const { palette } = useTheme();
  const [searchText, setSearchText] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleText = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );
  useEffect(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      dispatch(searchPortFolio(searchText));
    }, 100);
  }, [searchText, dispatch]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={onToggleTheme}>
            {palette.mode === "dark" ? <ModeNightIcon /> : <WbSunnyIcon />}
          </IconButton>
          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/jslee")}
          >
            <Image src={"/images/jslee.jpg"} alt="프로필" fill={true} />
          </Avatar>
        </Stack>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, margin: 1 }}
        >
          PortFolio
        </Typography>
        <Search sx={{ margin: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="검색"
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={(e) => handleText(e)}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
