import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, [number, number]> = {};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    upsert: (
      state,
      {
        payload: { id, result },
      }: { payload: { id: string; result: [number, number] } }
    ) => {
      state[id] = result;
    },
  },
});

export const { upsert } = resultsSlice.actions;

export default resultsSlice;
