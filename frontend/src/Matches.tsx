import React from "react";

import Score from "./Score";
import { useAppSelector } from "./store";

const Matches: React.FC = () => {
  const matches = useAppSelector(({ matches }) =>
    matches.games.map(({ id, ...teams }) => ({
      id,
      result: matches.scores[id],
      ...teams,
    }))
  );

  return (
    <table>
      <tbody>
        {matches.map(({ id, teamA, teamB, result }) => (
          <tr key={id}>
            <td>{`${teamA} vs ${teamB}`}</td>
            <td>
              <Score>{result}</Score>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matches;
