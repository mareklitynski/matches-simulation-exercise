import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

import Matches from "./Matches";
import CommandButton from "./CommandButton";
import TotalGoals from "./TotalGoals";
import { useAppSelector, useAppDispatch } from "../store";
import { connectMatchesApi, triggerNextStep } from "../store/thunks";

const LiveScore: React.FC = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.step);

  useEffect(() => dispatch(connectMatchesApi()), [dispatch]);

  const handleClick = () => {
    dispatch(triggerNextStep());
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
