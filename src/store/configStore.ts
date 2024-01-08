import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import portFolio from "./actions/portfoilo";
import theme from "./actions/theme";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

const reducer = (state: any, action: PayloadAction<any>) => {
  return combineReducers({
    theme,
    portFolio,
  })(state, action);
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
