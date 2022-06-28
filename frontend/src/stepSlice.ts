import { createSlice } from "@reduxjs/toolkit";

enum Steps {
  Start,
  Progress,
  End,
}

const initialState: { value: Steps } = {
  value: Steps.Start,
};

const stepSlice = createSlice({
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

export default stepSlice;
