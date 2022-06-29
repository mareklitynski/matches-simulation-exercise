import matches from "./matches.json";
import generateGoal from "./generateGoal";

export default function* (maxGoals: number) {
  const results: Record<string, [number, number]> = matches.reduce(
    (acc, { id }) => ({ ...acc, [id]: [0, 0] }),
    {}
  );

  for (let goal = 0; goal < maxGoals; goal++) {
    const [id, team] = generateGoal(matches.map(({ id }) => id));
    const result = results[id];
    result[team]++;

    if (goal === maxGoals - 1) {
      return { id, result };
    }

    yield { id, result };
  }
}
