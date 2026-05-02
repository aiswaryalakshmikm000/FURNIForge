import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  //for analytics debugging, api retry logic
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(customMiddleware),
});