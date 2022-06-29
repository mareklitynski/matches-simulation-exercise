import score from "../score";
import generateGoal from "../generateGoal";

jest.mock("../generateGoal");
const mockedGenerateGoal = jest.mocked(generateGoal);

it("scores one point a time and ends after max goals", () => {
  mockedGenerateGoal
    .mockReturnValueOnce(["1", 0])
    .mockReturnValueOnce(["2", 1])
    .mockReturnValueOnce(["1", 0]);

  const scores = score(3);
  expect(scores.next().value).toEqual({ id: "1", result: [1, 0] });
  expect(scores.next().value).toEqual({ id: "2", result: [0, 1] });
  expect(scores.next().value).toEqual({ id: "1", result: [2, 0] });
  expect(scores.next().done).toBe(true);
});
