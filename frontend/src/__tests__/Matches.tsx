import { render, screen, within } from "@testing-library/react";
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
      results: { 1: [1, 2], 2: [3, 4] },
    }),
    subscribe: (listener: () => void) => listener(),
  } as unknown as Store;

  render(
    <Provider store={store}>
      <Matches />
    </Provider>
  );

  const rows = screen.getAllByRole("row");
  within(rows[0]).getByText("Germany vs Poland");
  within(rows[0]).getByText("1:2");
  within(rows[1]).getByText("Brazil vs Mexico");
  within(rows[1]).getByText("3:4");
});
