import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { setGames, updateScore, resetScores } from "./matchesSlice";
import { nextStep, Steps } from "./stepSlice";
import matchesApi, { Message } from "../matchesApi";

export const connectMatchesApi: () => ThunkAction<
  () => void,
  RootState,
  unknown,
  AnyAction
> = () => (dispatch) => {
  const handleMessage = (message: Message) => {
    if (message.type === "matches") {
      dispatch(setGames(message.data));
      dispatch(resetScores());
    }
    if (message.type === "scores") {
      dispatch(updateScore(message.data));

      if (message.data.finish) {
        dispatch(nextStep());
      }
    }
  };

  matchesApi.connect();
  matchesApi.requestMatches();

  return matchesApi.subscribe(handleMessage);
};

export const triggerNextStep: () => ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> = () => (dispatch, getState) => {
  const { step } = getState();

  if (step === Steps.Progress) {
    matchesApi.requestStop();
  } else {
    dispatch(resetScores());
    matchesApi.requestStart();
  }

  dispatch(nextStep());
};
