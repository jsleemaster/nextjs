import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import IconButton from "@mui/material/IconButton";
import { changeTheme } from "store/actions/theme";

const Header = () => {
  const { value: theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const onChangeTheme = useCallback(() => {
    return dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  }, [theme]);

  return (
    <>
      <IconButton onClick={onChangeTheme}>
        {theme === "light" ? <WbSunnyIcon /> : <ModeNightIcon />}
      </IconButton>
    </>
  );
};
export default Header;
