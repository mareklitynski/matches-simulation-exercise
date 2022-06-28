import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "./store";
import { next } from "./stepSlice";

const CommandButton: React.FC = () => {
  const dispatch = useDispatch();
  const step = useAppSelector((state) => state.step.value);

  const label = ["Start", "Finish", "Restart"][step];

  const handleClick = () => dispatch(next());

  return <button onClick={handleClick}>{label}</button>;
};

export default CommandButton;
