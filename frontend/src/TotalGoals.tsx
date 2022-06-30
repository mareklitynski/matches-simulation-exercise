import { useAppSelector } from "./store";

const TotalGoals: React.FC = () => {
  const total = useAppSelector((state) =>
    Object.values(state.matches.scores)
      .flat()
      .reduce((sum, score) => sum + score, 0)
  );

  return <div>Total goals: {total}</div>;
};

export default TotalGoals;
