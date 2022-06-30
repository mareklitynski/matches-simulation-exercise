import React from "react";

import { Steps } from "./stepSlice";

const CommandButton: React.FC<{ step: Steps; onClick: () => void }> = ({
  step,
  onClick,
}) => {
  const label = ["Start", "Finish", "Restart"][step];

  return <button onClick={onClick}>{label}</button>;
};

export default CommandButton;
