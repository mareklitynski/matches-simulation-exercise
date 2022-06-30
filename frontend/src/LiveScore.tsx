import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import Matches from "./Matches";
import CommandButton from "./CommandButton";
import { useAppSelector } from "./store";
import { setGames, updateScore, resetScores } from "./matchesSlice";
import { nextStep, Steps } from "./stepSlice";
import TotalGoals from "./TotalGoals";
import matchesApi, { Message } from "./matchesApi";

const LiveScore: React.FC = () => {
  const dispatch = useDispatch();
  const step = useAppSelector((state) => state.step);

  const handleMessage = useCallback(
    (message: Message) => {
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
    },
    [dispatch]
  );

  useEffect(() => {
    matchesApi.connect();
    matchesApi.requestMatches();

    return matchesApi.subscribe(handleMessage);
  }, [handleMessage]);

  const handleClick = () => {
    if (step === Steps.Progress) {
      matchesApi.requestStop();
    } else {
      dispatch(resetScores());
      matchesApi.requestStart();
    }
    dispatch(nextStep());
  };

  return (
    <>
      <CommandButton step={step} onClick={handleClick} />
      <Matches />
      <TotalGoals />
    </>
  );
};

export default LiveScore;
