import React from "react";
import Button from "@mui/material/Button";

import { Steps } from "./stepSlice";

const CommandButton: React.FC<{ step: Steps; onClick: () => void }> = ({
  step,
  onClick,
}) => {
  const label = ["Start", "Finish", "Restart"][step];

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{ width: 96, textTransform: "none" }}
    >
      {label}
    </Button>
  );
};

export default CommandButton;
