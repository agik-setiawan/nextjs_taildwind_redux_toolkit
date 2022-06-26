import { configureStore, createSerializableStateInvariantMiddleware, isPlain, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tambahkurang } from "./features/tambahkurang/tambahkurang.slice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer: {
    [tambahkurang.name]:tambahkurang.reducer
  },
  middleware: customizedMiddleware
})
export type RootState = ReturnType<typeof store.getState>;

export default store;