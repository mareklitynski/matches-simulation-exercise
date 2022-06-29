import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import CommandButton from "./CommandButton";
import Matches from "./Matches";
import TotalGoals from "./TotalGoals";

const App = () => (
  <Provider store={store}>
    <CommandButton />
    <Matches />
    <TotalGoals />
  </Provider>
);

export default App;
