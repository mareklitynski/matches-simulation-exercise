import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import CommandButton from "./CommandButton";
import Matches from "./Matches";

const App = () => (
  <Provider store={store}>
    <CommandButton />
    <Matches />
  </Provider>
);

export default App;
