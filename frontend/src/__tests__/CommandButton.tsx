import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

it("moves through steps", () => {
  render(<App />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Start");

  userEvent.click(button);
  expect(button).toHaveTextContent("Finish");

  userEvent.click(button);
  expect(button).toHaveTextContent("Restart");

  userEvent.click(button);
  expect(button).toHaveTextContent("Start");
});
