import { createSlice } from "@reduxjs/toolkit";

export enum Steps {
  Start,
  Progress,
  End,
}

const initialState = Steps.Start as Steps;

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state) => (state === Steps.End ? Steps.Progress : state + 1),
  },
});

export const { nextStep } = stepSlice.actions;

export default stepSlice;
