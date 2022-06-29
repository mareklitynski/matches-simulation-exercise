import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import stepSlice from "./stepSlice";
import matchesSlice from "./matchesSlice";
import resultsSlice from "./resultsSlice";

const store = configureStore({
  reducer: {
    step: stepSlice.reducer,
    matches: matchesSlice.reducer,
    results: resultsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
