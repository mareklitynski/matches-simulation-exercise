import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

enum Steps {
  Start,
  Progress,
  End,
}

const initialState: { value: Steps } = {
  value: Steps.Start,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    next: (state) => {
      if (state.value === Steps.End) {
        state.value = Steps.Start;
      } else {
        state.value++;
      }
    },
  },
});

export const { next } = stepSlice.actions;

const store = configureStore({ reducer: { step: stepSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
