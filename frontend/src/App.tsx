import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import CommandButton from "./CommandButton";

const App = () => (
  <Provider store={store}>
    <CommandButton />
  </Provider>
);

export default App;
