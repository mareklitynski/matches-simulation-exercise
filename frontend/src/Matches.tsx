import React from "react";

import { useAppSelector } from "./store";

const Matches: React.FC = () => {
  const matches = useAppSelector((state) =>
    state.matches.map(({ id, ...teams }) => ({
      id,
      result: state.results[id],
      ...teams,
    }))
  );

  return (
    <table>
      <tbody>
        {matches.map(({ id, teamA, teamB, result }) => (
          <tr key={id}>
            <td>{`${teamA} vs ${teamB}`}</td>
            <td>{result.join(":")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matches;
