import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import Score from "./Score";
import { useAppSelector } from "../store";

const Matches: React.FC = () => {
  const matches = useAppSelector(({ matches }) =>
    matches.games.map(({ id, ...teams }) => ({
      id,
      result: matches.scores[id],
      ...teams,
    }))
  );

  return (
    <Table>
      <TableBody>
        {matches.map(({ id, teamA, teamB, result }) => (
          <TableRow key={id}>
            <TableCell
              sx={{ paddingLeft: 0, fontSize: 16 }}
            >{`${teamA} vs ${teamB}`}</TableCell>
            <TableCell sx={{ paddingRight: 0, fontSize: 16 }}>
              <Score>{result}</Score>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Matches;
