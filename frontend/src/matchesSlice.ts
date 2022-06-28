import { createSlice } from "@reduxjs/toolkit";

const initialState: { id: string; teamA: string; teamB: string }[] = [];

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    set: (_state, { payload }) => payload,
  },
});

export const { set } = matchesSlice.actions;

export default matchesSlice;
