import { configureStore } from "@reduxjs/toolkit";
import ProdactsSlice from "./Actions/prodectsCard";

export const store = configureStore({
  reducer: {
     ProdactsSlice,
  },
});
