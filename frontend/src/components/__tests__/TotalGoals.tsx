import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "redux";

import TotalGoals from "../TotalGoals";

it("shows total goals", () => {
  const store = {
    getState: jest.fn().mockReturnValue({
      matches: {
        games: [
          { id: "1", teamA: "Germany", teamB: "Poland" },
          { id: "2", teamA: "Brazil", teamB: "Mexico" },
        ],
        scores: { 1: [1, 2], 2: [3, 4] },
      },
    }),
    subscribe: jest.fn(),
  } as unknown as Store;

  render(
    <Provider store={store}>
      <TotalGoals />
    </Provider>
  );

  screen.getByText("Total goals: 10");
});
