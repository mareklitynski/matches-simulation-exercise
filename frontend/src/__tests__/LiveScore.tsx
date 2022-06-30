import { render, screen, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

jest.mock("../matchesApi");

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

it("shows received scores", async () => {
  jest.useFakeTimers();

  const user = userEvent.setup({ delay: null });
  render(<App />);

  const rows = await screen.findAllByRole("row");
  within(rows[0]).getByText("Test1 vs Test2");
  expect(rows[0]).toHaveTextContent("0:0");
  within(rows[1]).getByText("Other1 vs Other2");
  expect(rows[1]).toHaveTextContent("0:0");

  const button = screen.getByRole("button", { name: "Start" });
  await user.click(button);
  screen.getByText("Finish");

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(rows[0]).toHaveTextContent("0:0");
  expect(rows[1]).toHaveTextContent("0:1");

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(rows[0]).toHaveTextContent("1:0");
  expect(rows[1]).toHaveTextContent("0:1");

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(rows[0]).toHaveTextContent("1:0");
  expect(rows[1]).toHaveTextContent("1:1");
});
