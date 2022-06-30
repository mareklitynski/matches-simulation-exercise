import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

jest.mock("../matchesApi", () => jest.createMockFromModule("../matchesApi"));

it("moves through steps", async () => {
  const user = userEvent.setup();
  render(<App />);

  const button = screen.getByRole("button", { name: "Start" });

  await user.click(button);
  screen.getByRole("button", { name: "Finish" });

  await act(() => user.click(button));
  screen.getByRole("button", { name: "Restart" });

  await user.click(button);
  screen.getByRole("button", { name: "Finish" });
});
