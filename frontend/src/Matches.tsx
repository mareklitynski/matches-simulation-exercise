import React from "react";

import { useAppSelector } from "./store";

const Matches: React.FC = () => {
  const matches = useAppSelector((state) => state.matches);

  return (
    <table>
      <tbody>
        {matches.map(({ id, teamA, teamB }) => (
          <tr key={id}>
            <td>{`${teamA} vs ${teamB}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matches;
