import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import stepSlice from "./stepSlice";
import matchesSlice from "./matchesSlice";

const store = configureStore({
  reducer: {
    step: stepSlice.reducer,
    matches: matchesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default store;
