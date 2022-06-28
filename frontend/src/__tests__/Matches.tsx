import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "redux";

import Matches from "../Matches";

it("shows matches", () => {
  const store = {
    getState: jest.fn().mockReturnValue({
      matches: [
        { id: "1", teamA: "Germany", teamB: "Poland" },
        { id: "2", teamA: "Brazil", teamB: "Mexico" },
      ],
    }),
    subscribe: (listener: () => void) => listener(),
  } as unknown as Store;

  render(
    <Provider store={store}>
      <Matches />
    </Provider>
  );

  screen.getByText("Germany vs Poland");
  screen.getByText("Brazil vs Mexico");
});
