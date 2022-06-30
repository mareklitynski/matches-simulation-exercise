import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

import Matches from "./Matches";
import CommandButton from "./CommandButton";
import { useAppSelector } from "../store";
import { setGames, updateScore, resetScores } from "../store/matchesSlice";
import { nextStep, Steps } from "../store/stepSlice";
import TotalGoals from "./TotalGoals";
import matchesApi, { Message } from "../matchesApi";

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card variant="outlined">
        <CardActions style={{ justifyContent: "center" }}>
          <CommandButton step={step} onClick={handleClick} />
        </CardActions>
        <CardContent sx={{ paddingX: 4, paddingY: 0 }}>
          <Matches />
          <TotalGoals />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LiveScore;
