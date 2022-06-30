import Box from "@mui/material/Box";

import { useAppSelector } from "../store";

const TotalGoals: React.FC = () => {
  const total = useAppSelector((state) =>
    Object.values(state.matches.scores)
      .flat()
      .reduce((sum, score) => sum + score, 0)
  );

  return (
    <Box sx={{ textAlign: "right", marginTop: 3, fontSize: 14 }}>
      Total goals: {total}
    </Box>
  );
};

export default TotalGoals;
