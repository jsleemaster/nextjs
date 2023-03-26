import { createSlice, createAction } from "@reduxjs/toolkit";

interface ThemeState {
  value: "light" | "dark";
}

const initialState: ThemeState = {
  value: "light",
};

const theme = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { actions, reducer: themeReducer } = theme;

export const { changeTheme } = actions;

export default themeReducer;
