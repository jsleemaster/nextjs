import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const portFolioItems = [
  { id: 1, name: "날짜 계산", href: "dateCheck" },
  { id: 2, name: "무엇이든 물어보세요.", href: "anyQuestion" },
  { id: 3, name: "명언 알림", href: "lifeQuotes" },
];
export const portFolioSlice = createSlice({
  name: "portFolio",
  initialState: {
    items: portFolioItems,
    filterItems: portFolioItems,
  },
  reducers: {
    searchPortFolio: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.filterItems = state.items.filter((item) => {
          return item.name.includes(action.payload);
        });
      } else {
        state.filterItems = state.items;
      }
    },
  },
});

export const { searchPortFolio } = portFolioSlice.actions;

export default portFolioSlice.reducer;
