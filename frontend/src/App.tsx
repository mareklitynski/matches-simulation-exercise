import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import LiveScore from "./LiveScore";

const App: React.FC = () => (
  <Provider store={store}>
    <LiveScore />
  </Provider>
);

export default App;
