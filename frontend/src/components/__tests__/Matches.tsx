import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "redux";

import Matches from "../Matches";

it("shows matches", () => {
  const store = {
    getState: jest.fn().mockReturnValue({
      matches: {
        games: [
          { id: "1", teamA: "Germany", teamB: "Poland" },
          { id: "2", teamA: "Brazil", teamB: "Mexico" },
        ],
        scores: { "1": [1, 2], "2": [3, 4] },
      },
    }),
    subscribe: jest.fn(),
  } as unknown as Store;

  render(
    <Provider store={store}>
      <Matches />
    </Provider>
  );

  const rows = screen.getAllByRole("row");
  within(rows[0]).getByText("Germany vs Poland");
  expect(rows[0]).toHaveTextContent("1:2");
  within(rows[1]).getByText("Brazil vs Mexico");
  expect(rows[1]).toHaveTextContent("3:4");
});
