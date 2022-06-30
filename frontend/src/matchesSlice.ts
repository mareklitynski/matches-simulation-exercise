import { createSlice } from "@reduxjs/toolkit";

type Game = { id: string; teamA: string; teamB: string };
type Scores = Record<string, [number, number]>;

const initialState: {
  games: Game[];
  scores: Scores;
} = { games: [], scores: {} };

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setGames: (state, { payload }: { payload: Game[] }) => {
      state.games = payload;
    },
    updateScore: (
      state,
      {
        payload: { id, result },
      }: { payload: { id: string; result: [number, number] } }
    ) => {
      state.scores[id] = result;
    },
    resetScores: (state) => {
      state.scores = state.games.reduce<Scores>(
        (scores, { id }) => ({ ...scores, [id]: [0, 0] }),
        {}
      );
    },
  },
});

export const { setGames, updateScore, resetScores } = matchesSlice.actions;

export default matchesSlice;
