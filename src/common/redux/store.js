import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
console.log("store: ", store.getState());

export { store };
