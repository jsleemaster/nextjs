import { createSlice } from "@reduxjs/toolkit";

export const portFolioSlice = createSlice({
  name: "portFolio",
  initialState: {
    items: [
      { id: 1, name: "Home", href: "" },
      { id: 2, name: "날짜", href: "dateCheck" },
      { id: 3, name: "무엇이든 물어보세요.", href: "anyQuestion" },
    ],
  },
  reducers: {
    togglePortFolio: (state) => {
      // state.darkPortFolio = !state.darkPortFolio;
    },
  },
});

export const { togglePortFolio } = portFolioSlice.actions;

export default portFolioSlice.reducer;
