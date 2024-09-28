import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
